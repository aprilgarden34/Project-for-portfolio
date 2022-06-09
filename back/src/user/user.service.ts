import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { providerType } from './user-provider.enum';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService, // private readonly configService: ConfigService,
  ) {}

  async createUser(createdUserDto: CreateUserDto): Promise<User> {
    const { email, username, password } = createdUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
      email,
      provider: providerType.SIM, // 임시로 sim 배정
    });

    try {
      await this.userRepository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('이미 존재하는 username 입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return user;
  }

  // 로그인시 access_token, refresh_token 발급
  // TODO: refresh_token은 이후에 redis 이용예정
  async signIn(
    loginUserDto: LoginUserDto,
  ): Promise<{ accessToken: string; user: User }> {
    const { email, password } = loginUserDto;
    const user = await this.userRepository.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, (await user).password))) {
      const payload = { email };
      const accessToken = await this.jwtService.sign(payload);
      const currentHashedRefreshToken = await bcrypt.hash(email, 10);

      await this.userRepository.update(user.id, {
        currentHashedRefreshToken,
      });

      return { accessToken, user };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }

  // access_token 만료시, refresh_token 재발급
  // access_token에 있는 사용자 id를 추출하여 refresh 유효한지 확인
  // refresh 유효한 경우엔 access_token 재발급
  // 만료된 경우엔 재로그인하도록 유도
  async refreshToken(accessToken: string) {
    const payload = this.jwtService.decode(accessToken);
    const email = payload['email'];

    // TODO: redis 이용하여 refresh_token 유효한지 확인
    // 지금은 DB에만 들어가있어서 user 확인후 로직 진행

    const user = await this.userRepository.findOne({ where: { email } });

    if (user.currentHashedRefreshToken === null) {
      throw new UnauthorizedException('refresh token이 유효하지 않습니다.');
    }

    const newAccessToken = await this.jwtService.sign({ email });

    return { newAccessToken };
  }
}

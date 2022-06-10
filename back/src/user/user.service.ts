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
  async refreshToken(accessToken: string) {
    // TODO: redis 이용하여 refresh_token 유효한지 확인
    const payload = this.jwtService.decode(accessToken);
    const email = payload['email'];

    const newAccessToken = await this.jwtService.sign({ email });

    return { newAccessToken };
  }
}

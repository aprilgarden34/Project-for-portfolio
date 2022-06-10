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
import { UserOauthDto } from './dto/user.oauth.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser({ username, password, email }): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const uuid = uuidv4();
    const user = this.userRepository.create({
      id: String(uuid),
      username,
      password: hashedPassword,
      email,
      provider: providerType.SIM, // 임시로 sim 배정
    });

    try {
      const userResult = await this.userRepository.save(user);
      console.log(userResult);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('이미 존재하는 username 입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return user;
  }

  async signIn(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { email, password } = loginUserDto;
    const user = await this.userRepository.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, (await user).password))) {
      const payload = { email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }

  // Oauth
  async getOauth(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  // kakao
  async kakaoLogin(userKakaoDto: UserOauthDto): Promise<any> {
    const { password, email, username } = userKakaoDto;
    let user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      user = await this.userRepository.create({
        username,
        email,
        password,
        provider: providerType.KAKAO,
      });

      try {
        await this.userRepository.save(user);
      } catch (err) {
        if (err.code === '23505') {
          throw new ConflictException('Existing User');
        } else {
          throw new InternalServerErrorException();
        }
      }
    }
    const payload = { email };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken, email: user.email, username: user.username };
  }

  // google
  async googleLogin(userOauthDto: UserOauthDto): Promise<any> {
    const { password, email, username } = userOauthDto;
    let user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      user = await this.userRepository.create({
        username,
        email,
        password,
        provider: providerType.KAKAO,
      });

      try {
        await this.userRepository.save(user);
      } catch (err) {
        if (err.code === '23505') {
          throw new ConflictException('Existing User');
        } else {
          throw new InternalServerErrorException();
        }
      }
    }
    const payload = { email };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken, email: user.email, username: user.username };
  }
}

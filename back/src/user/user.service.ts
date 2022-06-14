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
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;
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
      return userResult;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('이미 존재하는 email 입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

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
  async refreshToken(user: User) {
    // TODO: redis 이용하여 refresh_token 유효한지 확인

    const newAccessToken = await this.jwtService.sign(user.email);

    return { newAccessToken };
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

  // update
  async updateUser(id, updateUserDto: UpdateUserDto): Promise<User> {
    const { description, username } = updateUserDto;
    const user = await this.userRepository.findOne({ where: { id } });

    user.description = description;
    user.username = username;
    try {
      const userResult = await this.userRepository.save(user);
      return userResult;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async deleteUser(id): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    user.isDeleted = true;
    try {
      const userResult = await this.userRepository.save(user);
      return userResult;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}

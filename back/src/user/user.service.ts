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
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(createdUserDto: CreateUserDto): Promise<User> {
    const { username, password, email } = createdUserDto;

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

  async signIn(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { password, email } = loginUserDto;
    const user = this.userRepository.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, (await user).password))) {
      const payload = { email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}

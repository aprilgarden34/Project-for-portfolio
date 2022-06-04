import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { providerType } from './user-provider.enum';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>, // private jwtService: JwtService,
  ) {}

  async createUser(createdUserDto: CreateUserDto): Promise<void> {
    const { username, password, email, description } = createdUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
      email,
      description,
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
  }
}

import {
  Logger,
  Body,
  Controller,
  Post,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('User API')
@Controller('user')
export class UserController {
  private logger = new Logger(`UserController`);
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @ApiOperation({
    summary: '유저 생성(회원가입) API',
    description: '유저를 생성한다.',
  })
  @ApiResponse({ description: '회원가입 성공', type: User })
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user: User = await this.userService.createUser(createUserDto);
    this.logger.verbose(`User ${user.email} Sign-Up Success! 
    Payload: ${JSON.stringify(createUserDto)}`);
    return user;
  }

  // TODO: SIM 만! reflesh token 추가 필요

  // TODO: 회원 탈퇴(soft delete? 복원? 논의 필요)

  // TODO: oauth kakao, google 회원가입, 로그인

  // TODO: 회원 정보 수정
}

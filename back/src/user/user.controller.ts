import { Logger, Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';

@ApiTags('유저 API')
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
    this.logger.verbose(`User ${user.username} Sign-Up Success! 
    Payload: ${JSON.stringify(createUserDto)}`);
    return user;
  }

  // TODO: 유저 로그인 로직(reflesh token)

  // TODO: 회원 탈퇴(soft delete? 복원? 논의 필요)

  // TODO: oauth kakao, google

  // TODO: 회원 정보 수정
}

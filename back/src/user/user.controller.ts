import {
  Logger,
  Body,
  Controller,
  Post,
  ValidationPipe,
  UseGuards,
  Get,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { throwIfEmpty } from 'rxjs';
import { GetAccessToken } from './refresh.decorator';

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

  // TODO: SIM 만! refresh token 추가 필요
  @Post('signin')
  @ApiOperation({
    summary: '유저 로그인 API',
    description: '유저에게 토큰을 발행한다.',
  })
  @ApiResponse({ description: '로그인 성공', type: User })
  async signIn(
    @Body(ValidationPipe) loginUserDto: LoginUserDto,
  ): Promise<{ accessToken: string }> {
    const { accessToken } = await this.userService.signIn(loginUserDto);
    this.logger.verbose(`User ${loginUserDto.email} Sign-In Success! 
      Payload: ${JSON.stringify(loginUserDto)}`);
    return { accessToken };
  }

  // TODO: refresh 재발급 요청
  @Get('refresh')
  @UseGuards(AuthGuard('refresh'))
  async refresh(@GetAccessToken() accessToken: string) {
    const newAccessToken = await this.userService.refreshToken(accessToken);
    return newAccessToken;
  }

  // TODO: 회원 탈퇴(soft delete? 복원? 논의 필요)

  // TODO: oauth kakao, google 회원가입, 로그인

  // TODO: 회원 정보 수정
}

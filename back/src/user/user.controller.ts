import {
  Logger,
  Body,
  Controller,
  Post,
  ValidationPipe,
  Get,
  Req,
  HttpStatus,
  UseGuards,
  Patch,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { UserOauthDto } from './dto/user.oauth.dto';
import { KakaoAuth } from './guard/kakao.guard';
import { GoogleAuth } from './guard/google.guard';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { BookService } from 'src/book/book.service';
import { Book } from 'src/entities/book.entity';

@ApiTags('User API')
@Controller('user')
export class UserController {
  private logger = new Logger(`UserController`);
  constructor(
    private readonly userService: UserService,
    private readonly bookService: BookService,
  ) {}

  @Post('signup')
  @ApiOperation({
    summary: '유저 생성(회원가입) API',
    description: '유저를 생성한다.',
  })
  @ApiResponse({ description: '회원가입 성공', type: User })
  async signUp(@Body() createUserDto: CreateUserDto) {
    //createBookDto: CreateBookDto,
    //: Promise<User, Book[]>
    const user: User = await this.userService.createUser(createUserDto);
    // const books: Book[] = await this.bookService.createBook(createBookDto);
    this.logger.verbose(`User ${user.email} Sign-Up Success! 
    Payload: ${JSON.stringify({ createUserDto })}`);
    return { user }; //, books
  }

  // TODO: SIM 만! reflesh token 추가 필요
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
  // strategy 에서 보내주는 return user값을 받아오는 데코레이터 필요
  async refresh(@GetUser() user: User) {
    const newAccessToken = await this.userService.refreshToken(user);
    return newAccessToken;
  }

  // oauth kakao, google 회원가입, 로그인
  // kakao login
  @Get('kakao')
  @KakaoAuth()
  @ApiOperation({
    summary: '유저 카카오 로그인 API',
    description: '로그인 요청',
  })
  @ApiResponse({ description: '로그인 요청 성공', type: User })
  async kakaoLogin() {
    this.logger.verbose(`Kakao Sign-In Request Success!`);
    return HttpStatus.OK;
  }

  @Get('kakao/redirect')
  @KakaoAuth()
  @ApiOperation({
    summary: '유저 카카오 로그인 API',
    description: '유저에게 카카오 토큰을 발행한다.',
  })
  @ApiResponse({ description: '카카오 로그인 성공', type: User })
  async kakaoLoginCallback(@Req() req): Promise<any> {
    const { accessToken, email, username } = await this.userService.kakaoLogin(
      req.user as UserOauthDto,
    );
    this.logger.verbose(`Kakao User Email ${email} Sign-In Success!`);
    return { accessToken, email, username };
  }

  // google
  @Get('google')
  @GoogleAuth()
  @ApiOperation({
    summary: '유저 구글 로그인 API',
    description: '로그인 요청',
  })
  @ApiResponse({ description: '유저 구글 로그인 성공', type: User })
  async googleAuth() {
    this.logger.verbose(`Google Sign-In Request Success!`);
    return HttpStatus.OK;
  }

  @Get('google/redirect')
  @GoogleAuth()
  @ApiOperation({
    summary: '유저 구글 로그인 API',
    description: '유저에게 구글 토큰을 발행한다.',
  })
  @ApiResponse({ description: '구글 로그인 성공', type: User })
  async GoogleLoginCallback(@Req() req): Promise<any> {
    const { accessToken, email, username } = await this.userService.googleLogin(
      req.user as UserOauthDto,
    );
    this.logger.verbose(`Google User Email ${email} Sign-In Success!`);
    return { accessToken, email, username };
  }

  // 회원 정보 수정 : description, username
  @Patch('/update/:id')
  @ApiOperation({
    summary: '유저 정보 수정 API',
    description: '유저 정보를 수정한다.',
  })
  @ApiResponse({ description: '유저 정보 수정 성공', type: User })
  async updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user: User = await this.userService.updateUser(id, updateUserDto);
    this.logger.verbose(`User ${updateUserDto.username} update Success! 
      Payload: ${JSON.stringify(user)}`);
    return user;
  }

  // 회원 탈퇴 (soft delete)
  @Patch('/delete/:id')
  @ApiOperation({
    summary: '유저 회원 탈퇴 API',
    description: '유저 회원 탈퇴를 한다.',
  })
  @ApiResponse({ description: '유저 회원 탈퇴 성공', type: User })
  async deleteUser(@Param('id') id: string): Promise<User> {
    const user: User = await this.userService.deleteUser(id);
    this.logger.verbose(`User ${id} delete Success! 
      Payload: ${JSON.stringify(user)}`);
    return user;
  }
}

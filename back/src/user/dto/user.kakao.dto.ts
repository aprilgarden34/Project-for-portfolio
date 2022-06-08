import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';

export class UserKakaoDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '비밀번호는 영어 혹은 숫자만 가능합니다.',
  })
  @ApiPropertyOptional({ description: '비밀번호' })
  password: string;

  @IsEmail()
  @ApiPropertyOptional({ description: '이메일' })
  email: string;

  @IsString()
  @MaxLength(20)
  @ApiPropertyOptional({ description: '유저' })
  username: string;

  @IsString()
  @ApiPropertyOptional({ description: '엑세스 토큰' })
  accessToken: string;

  static of(params: Partial<User>): User {
    const user = new User();

    Object.assign(user, params);

    return user;
  }
}

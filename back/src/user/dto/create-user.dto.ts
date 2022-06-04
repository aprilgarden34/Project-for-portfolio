import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '비밀번호는 영어 혹은 숫자만 가능합니다.',
  })
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(100)
  description: string;
}

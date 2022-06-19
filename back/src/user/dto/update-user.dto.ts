import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';

export class UpdateUserDto {
  @IsString()
  @ApiProperty({ description: '유저 정보' })
  description: string;

  @IsString()
  @ApiProperty({ description: '유저 이름' })
  username: string;

  static of(params: Partial<User>): User {
    const user = new User();

    Object.assign(user, params);

    return user;
  }
}

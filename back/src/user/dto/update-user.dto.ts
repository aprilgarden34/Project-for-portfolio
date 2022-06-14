import { IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';

export class UpdateUserDto {
  @IsString()
  @ApiPropertyOptional({ description: '유저 정보' })
  description: string;

  @IsString()
  @ApiPropertyOptional({ description: '유저 이름' })
  username: string;

  static of(params: Partial<User>): User {
    const user = new User();

    Object.assign(user, params);

    return user;
  }
}

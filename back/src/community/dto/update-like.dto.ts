import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateLikeDto {
  @IsString()
  @ApiProperty({ description: '게시글 id' })
  community_id: string;

  @IsString()
  @ApiProperty({ description: '유저 id' })
  user_id: string;
}

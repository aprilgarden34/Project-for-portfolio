import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class DeleteCommunityDto {
  @IsNumber()
  @ApiProperty({ description: '게시글 id' })
  id: number;
}

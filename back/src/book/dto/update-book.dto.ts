import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @ApiPropertyOptional({ description: '사진 경로' })
  photo_url: string;

  @IsString()
  @ApiPropertyOptional({ description: '유저 정보' })
  description: string;
}

import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCommunityDto {
  @IsString()
  @ApiPropertyOptional({ description: '사진 경로' })
  photo_url: string;

  @IsString()
  @ApiPropertyOptional({ description: '식물 이름' })
  title: string;

  @IsString()
  @ApiPropertyOptional({ description: '유저 정보' })
  description: string;

  // createdAt은 현재 시각으로 그냥 올려줄 예정
  // 프론트에서 보내줄지 백엔드에서 올려줄지에 따라 다름!
}

import {
  IsBoolean,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Diary } from 'src/entities/diary.entity';

export class CreateDiaryDto {
  @IsBoolean()
  @ApiPropertyOptional({ description: '해금 여부', default: false })
  type?: boolean = false;

  @IsString()
  @ApiPropertyOptional({ description: '메모' })
  description: string;

  @IsString()
  @ApiPropertyOptional({ description: '유저가 찍은 이미지' })
  imageURL: string;

  @IsString()
  @ApiProperty({ description: '유저 아이디' })
  user_id: string;

  @IsString()
  @ApiProperty({ description: '식물 아이디' })
  plant_id: string;

  static of(params: Partial<Diary>): Diary {
    const diary = new Diary();

    Object.assign(diary, params);

    return diary;
  }
}

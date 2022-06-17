import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Diary } from 'src/entities/diary.entity';

export class CreateDiaryDto {
  static of(params: Partial<Diary>): Diary {
    const diary = new Diary();

    Object.assign(diary, params);

    return diary;
  }
}

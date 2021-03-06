import { Inject, Injectable } from '@nestjs/common';
import { Diary } from 'src/entities/diary.entity';
import { Repository } from 'typeorm';
import { CreateDiaryDto } from './dto/diary-create.dto';

@Injectable()
export class DiaryService {
  constructor() // private readonly diaryRepository: Repository<Diary>, // @Inject('DIARY_REPOSITORY')
  {}
  private diarys: Diary[] = [];
  async getAll(): Promise<Diary[]> {
    const diarys = await this.diarys;
    return diarys;
  }

  // 해금type 없애면 없어짐
  async createDiary({ user_id }) {
    //: Promise<Diary[]>
    // const diarys = this.diaryRepository.create({
    // });
    // return diarys;
  }
}

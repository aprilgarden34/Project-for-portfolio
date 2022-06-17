import { Inject, Injectable } from '@nestjs/common';
import { Diary } from 'src/entities/diary.entity';
import { Repository } from 'typeorm';
import { CreateDiaryDto } from './dto/diary-create.dto';

@Injectable()
export class DiaryService {
  constructor(
    @Inject('DIARY_REPOSITORY')
    private readonly diaryRepository: Repository<Diary>,
  ) {}
  private diarys: Diary[] = [];
  async getAll(): Promise<Diary[]> {
    const diarys = await this.diarys;
    return diarys;
  }

  async createDiary(createDiaryDto: CreateDiaryDto) {
    //: Promise<Diary>
    // const { username, email, password } = createDiaryDto;
    // const user = this.userRepository.create({
    //   id: String(uuid),
    //   username,
    //   password: hashedPassword,
    //   email,
    //   provider: providerType.SIM, // 임시로 sim 배정
    // });
  }
}

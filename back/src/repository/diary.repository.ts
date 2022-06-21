import { Diary } from 'src/entities/diary.entity';
import { DataSource } from 'typeorm';

export const diaryRepository = [
  {
    provide: 'DIRAY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Diary),
    inject: ['DATA_SOURCE'],
  },
];

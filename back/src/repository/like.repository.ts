import { Like } from 'src/entities/like.entity';
import { DataSource } from 'typeorm';

export const likeRepository = [
  {
    provide: 'LIKE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Like),
    inject: ['DATA_SOURCE'],
  },
];

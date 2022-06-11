import { Community } from 'src/entities/community.entity';
import { DataSource } from 'typeorm';

export const communityRepository = [
  {
    provide: 'COMMUNITY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Community),
    inject: ['DATA_SOURCE'],
  },
];

import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from './community.entity';
import { User } from './user.entity';

@Entity()
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiPropertyOptional({ description: 'id' })
  id: number;

  @ManyToOne((type) => Community)
  @JoinColumn([
    { name: 'community_id', referencedColumnName: 'id' },
    { name: 'locale_id', referencedColumnName: 'locale_id' },
  ])
  community: Community;

  //   @ManyToOne(() => Community, (community) => community.id)
  //   community_id: Community;

  //   @ManyToOne(() => Community, (community) => community.user_id)
  //   user_id: User;
}

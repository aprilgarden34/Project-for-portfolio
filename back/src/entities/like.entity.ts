import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  Unique,
} from 'typeorm';
import { Community } from './community.entity';
import { User } from './user.entity';

@Entity()
@Unique(['id'])
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiPropertyOptional({ description: 'id' })
  id: string;

  @ManyToOne((type) => Community)
  @JoinColumn([
    { name: 'community_id', referencedColumnName: 'id' },
    { name: 'user_id', referencedColumnName: 'userId' },
  ])
  community: Community;

  // @ManyToOne(() => Community, (community) => community.id)
  // community_id: Community;

  // @ManyToOne(() => Community, (community) => community.user_id)
  // user_id: User;
}

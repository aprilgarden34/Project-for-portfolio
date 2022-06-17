import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Community } from './community.entity';

@Entity()
@Unique(['id'])
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiPropertyOptional({ description: 'id' })
  id: string;

  @ManyToOne(() => Community)
  @JoinColumn([
    { name: 'community_id', referencedColumnName: 'id' },
    { name: 'user_id', referencedColumnName: 'userId' },
  ])
  community: Community;
}

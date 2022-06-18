import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { Community } from './community.entity';

@Entity()
@Unique(['id'])
export class Like extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', name: 'id' })
  @ApiPropertyOptional({ description: 'id' })
  id: string;

  @ManyToOne(() => Community)
  @JoinColumn([
    { name: 'community_id', referencedColumnName: 'id' },
    { name: 'user_id', referencedColumnName: 'userId' },
  ])
  community: Community;
}

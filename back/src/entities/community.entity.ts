import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  RelationId,
  Unique,
} from 'typeorm';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user.entity';
import { Like } from './like.entity';

@Entity()
@Unique(['id', 'userId'])
export class Community extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', name: 'id' })
  @ApiPropertyOptional({ description: 'id' })
  id: string;

  @Column({ type: 'varchar', name: 'photo_url' })
  @ApiPropertyOptional({ description: '사진 경로' })
  photo_url: string;

  @Column({ type: 'varchar', name: 'title' })
  @ApiPropertyOptional({ description: '식물 이름' })
  title: string;

  @Column({ type: 'varchar', name: 'description', default: 'None' })
  @ApiPropertyOptional({ description: '유저 정보' })
  description: string;

  @Column({ type: 'varchar', name: 'created_at' })
  @ApiPropertyOptional({ description: '날짜' })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user_id: User;

  @Column({ type: 'varchar', name: 'user_id' })
  @RelationId((community: Community) => community.user_id)
  userId: string;

  @OneToMany(() => Like, (like) => like.id)
  like_id: Like;
}

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
  Unique,
} from 'typeorm';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user.entity';
import { Like } from './like.entity';

@Entity()
@Unique(['id', 'userId'])
export class Community extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiPropertyOptional({ description: 'id' })
  id: string;

  @Column()
  @ApiPropertyOptional({ description: '사진 경로' })
  photo_url: string;

  @Column()
  @ApiPropertyOptional({ description: '식물 이름' })
  title: string;

  @Column({ default: 'None' })
  @ApiPropertyOptional({ description: '유저 정보' })
  description: string;

  @Column()
  @ApiPropertyOptional({ description: '날짜' })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user_id: User;

  @Column()
  @RelationId((community: Community) => community.user_id)
  userId: string;

  @OneToMany(() => Like, (like) => like.id)
  like_id: Like;
}

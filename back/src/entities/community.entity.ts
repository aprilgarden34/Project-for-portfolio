import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user.entity';
import { Like } from './like.entity';

@Entity()
@Unique(['userId', 'id'])
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

  @Column()
  userId: string;

  // user_id column 생성
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user_id: User;

  @OneToMany(() => Like, (like) => like.id)
  like_id: Like;
}

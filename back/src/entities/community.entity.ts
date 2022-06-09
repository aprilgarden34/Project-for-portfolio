import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity()
export class Community extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiPropertyOptional({ description: 'id' })
  id: number;

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
  user_id: User;
}

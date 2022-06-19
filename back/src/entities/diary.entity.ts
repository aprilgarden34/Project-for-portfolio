import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from './user.entity';
import { Plant } from './plant.entity';

@Entity()
@Unique(['id'])
export class Diary extends BaseEntity {
  @PrimaryColumn()
  @ApiPropertyOptional({ description: 'id' })
  id!: string;

  @ApiPropertyOptional({ description: 'user id' })
  @ManyToOne(() => User, (user) => user.id)
  user_id: User;

  @ApiPropertyOptional({ description: 'plant id' })
  @OneToOne(() => Plant, (plant) => plant.id)
  @JoinColumn()
  plant_id: Plant;

  @Column()
  @ApiPropertyOptional({ description: '메모' })
  description!: string | null;

  @Column()
  @ApiPropertyOptional({ description: '해금 여부' })
  type!: boolean;

  @Column()
  @ApiProperty({ description: '유저가 촬영한 사진' })
  imageURL!: string;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;
}

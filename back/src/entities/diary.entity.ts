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
  @PrimaryColumn({ type: 'varchar', name: 'id' })
  @ApiPropertyOptional({ description: 'id' })
  id: string;

  @Column({ type: 'varchar', name: 'description' })
  @ApiPropertyOptional({ description: '메모' })
  description!: string | null;

  @Column({ type: 'varchar', name: 'imageURL' })
  @ApiProperty({ description: '유저가 촬영한 사진' })
  imageURL: string;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;

  @ApiPropertyOptional({ description: 'plant id' })
  @OneToOne(() => Plant, (plant) => plant.id)
  @JoinColumn({ name: 'Plant', referencedColumnName: 'id' })
  Plant: Plant;

  @ApiPropertyOptional({ description: 'user id' })
  @ManyToOne(() => User, (user) => user.id)
  user_id: User;
}

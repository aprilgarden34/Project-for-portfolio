import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { providerType } from '../user/user-provider.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Community } from './community.entity';
import { Exclude } from 'class-transformer';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiPropertyOptional({ description: 'id' })
  id!: number;

  @Column()
  @ApiPropertyOptional({ description: '닉네임' })
  username!: string;

  @Column()
  @ApiPropertyOptional({ description: '이메일' })
  email!: string;

  @Column()
  @ApiPropertyOptional({ description: '비밀번호' })
  password!: string;

  @Column({ default: 'None' })
  @ApiPropertyOptional({ description: '유저 정보' })
  description: string;

  @Column()
  @ApiPropertyOptional({ description: '로그인 타입' })
  provider: providerType;

  @OneToMany(() => Community, (community) => community.user_id)
  community: Community[];

  @Column({ nullable: true })
  @Exclude()
  currentHashedRefreshToken?: string;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;
}

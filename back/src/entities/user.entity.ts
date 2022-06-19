import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { providerType } from '../user/user-provider.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Community } from './community.entity';
import { Exclude } from 'class-transformer';
import { Diary } from './diary.entity';

@Entity()
@Unique(['email'])
@Unique(['id'])
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', name: 'id' })
  @ApiPropertyOptional({ description: 'id' })
  id: string;

  @Column({ type: 'varchar', name: 'username' })
  @ApiPropertyOptional({ description: '닉네임' })
  username: string;

  @Column({ type: 'varchar', name: 'email' })
  @ApiPropertyOptional({ description: '이메일' })
  email: string | null;

  @Column({ type: 'varchar', name: 'password' })
  @ApiPropertyOptional({ description: '비밀번호' })
  password: string;

  @Column({ type: 'varchar', name: 'description', default: 'None' })
  @ApiPropertyOptional({ description: '유저 정보' })
  description: string;

  @Column({ type: 'varchar', name: 'provider' })
  @ApiPropertyOptional({ description: '로그인 타입' })
  provider: providerType;

  @Column({
    type: 'varchar',
    name: 'refresh_token',
    nullable: true,
  })
  @Exclude()
  currentHashedRefreshToken?: string;

  @Column({ type: 'varchar', name: 'is_deleted', default: false })
  @ApiPropertyOptional({ description: '회원 탈퇴 여부' })
  isDeleted: boolean;

  @OneToMany(() => Community, (community) => community.User)
  Communities: Community[];

  @OneToMany(() => Diary, (diary) => diary.user_id)
  book: Diary[];

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;
}

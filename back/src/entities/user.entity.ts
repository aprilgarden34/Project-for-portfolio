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
import { Book } from './book.entity';

@Entity()
@Unique(['email'])
@Unique(['id'])
export class User extends BaseEntity {
  @PrimaryColumn()
  @ApiPropertyOptional({ description: 'id' })
  id!: string;

  @Column()
  @ApiPropertyOptional({ description: '닉네임' })
  username!: string;

  @Column()
  @ApiPropertyOptional({ description: '이메일' })
  email!: string | null;

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

  @OneToMany(() => Book, (book) => book.user_id)
  book: Book[];

  @Column({ nullable: true })
  @Exclude()
  currentHashedRefreshToken?: string;

  @Column({ default: false })
  @ApiPropertyOptional({ description: '회원 탈퇴 여부' })
  isDeleted: boolean;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;
}

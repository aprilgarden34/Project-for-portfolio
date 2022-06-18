import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
@Entity()
@Unique(['id'])
export class Plant extends BaseEntity {
  @PrimaryColumn()
  @ApiPropertyOptional({ description: 'id' })
  id: number;

  @Column()
  @ApiPropertyOptional({ description: '꽃 이름' })
  name: string;

  @Column()
  @ApiPropertyOptional({ description: '꽃말' })
  flower_lang: string;

  @Column()
  @ApiPropertyOptional({ description: '유래' })
  info: string;

  @Column()
  @ApiPropertyOptional({ description: '종 설명' })
  type: string;

  @Column()
  @ApiPropertyOptional({ description: '자생지 국가' })
  native: string;

  @Column('simple-array')
  @ApiProperty({ description: '자생지 지역' })
  refine_native: string[];

  @Column()
  @ApiPropertyOptional({ description: '설명' })
  flower: string;

  @Column()
  @ApiPropertyOptional({ description: '개화시기' })
  date: string;

  @Column('simple-array')
  @ApiPropertyOptional({ description: '개화 달' })
  months: string[];

  @Column('simple-array')
  @ApiPropertyOptional({ description: '개화 계절' })
  seasons: string[];

  @Column('simple-array')
  @ApiPropertyOptional({ description: '이미지' })
  imgs: string[];
}

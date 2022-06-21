import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
@Entity()
@Unique(['id'])
export class Plant extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', name: 'id' })
  @ApiPropertyOptional({ description: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name' })
  @ApiPropertyOptional({ description: '꽃 이름' })
  name: string;

  @Column({ type: 'varchar', name: 'flower_lang' })
  @ApiPropertyOptional({ description: '꽃말' })
  flower_lang: string;

  @Column({ type: 'varchar', name: 'info' })
  @ApiPropertyOptional({ description: '유래' })
  info: string;

  @Column({ type: 'varchar', name: 'type' })
  @ApiPropertyOptional({ description: '종 설명' })
  type: string;

  @Column({ type: 'varchar', name: 'native' })
  @ApiPropertyOptional({ description: '자생지 국가' })
  native: string;

  @Column({ type: 'simple-array', name: 'refine_native' })
  @ApiProperty({ description: '자생지 지역' })
  refine_native: string[];

  @Column({ type: 'varchar', name: 'flower' })
  @ApiPropertyOptional({ description: '설명' })
  flower: string;

  @Column({ type: 'varchar', name: 'date' })
  @ApiPropertyOptional({ description: '개화시기' })
  date: string;

  @Column({ type: 'simple-array', name: 'months' })
  @ApiPropertyOptional({ description: '개화 달' })
  months: string[];

  @Column({ type: 'simple-array', name: 'seasons' })
  @ApiPropertyOptional({ description: '개화 계절' })
  seasons: string[];

  @Column({ type: 'simple-array', name: 'imgs' })
  @ApiPropertyOptional({ description: '이미지' })
  imgs: string[];
}

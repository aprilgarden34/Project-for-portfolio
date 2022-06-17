import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Community } from 'src/entities/community.entity';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { DeleteCommunityDto } from './dto/delete-community.dto';

@ApiTags('커뮤니티 API')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  // @GetUser() 이용해서 로그인한 유저 정보 가져와야함
  // 임시로 user_id 파라미터 받아서 이용중
  @Post(':user_id')
  @ApiOperation({
    summary: 'community 생성',
    description: '해당 user_id가 작성한 맞는 게시글 생성',
  })
  @ApiResponse({ description: '생성 성공' })
  @ApiBody({ type: CreateCommunityDto })
  async createCommunity(
    @Body() createCommunityDto: CreateCommunityDto,
    @Param('user_id') user_id: string,
  ): Promise<Community> {
    const community = await this.communityService.create(
      user_id,
      createCommunityDto,
    );
    return community;
  }

  @Delete()
  @ApiOperation({
    summary: 'community 삭제',
    description: '해당 community_id에 맞는 게시글 삭제',
  })
  @ApiResponse({ description: '삭제 성공' })
  @ApiBody({ type: DeleteCommunityDto })
  async deleteCommunity(@Body() deleteCommunityDto: DeleteCommunityDto) {
    return this.communityService.deleteOne(deleteCommunityDto);
  }

  // 게시글 조회
  @Get()
  @ApiOperation({
    summary: 'community 전체 조회',
    description: 'community 조회',
  })
  @ApiResponse({ description: '조회 성공', type: Community })
  async getCommunities(): Promise<Community[]> {
    return this.communityService.findAll();
  }

  // TODO: 좋아요 patch

  // TODO: 게시글 검색 api (유저이름, 게시글 description, 식물 title)
}

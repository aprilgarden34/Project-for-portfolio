import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
}

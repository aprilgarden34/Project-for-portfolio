import { Body, Controller, Delete, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
    @Param('user_id') user_id: number,
  ): Promise<Community> {
    const community = await this.communityService.create(
      user_id,
      createCommunityDto,
    );
    return community;
  }

  @Delete(':community_id')
  async deleteCommunity(
    @Query('community_id') deleteCommunityDto: DeleteCommunityDto,
  ) {
    return this.communityService.deleteOne(deleteCommunityDto);
  }
}

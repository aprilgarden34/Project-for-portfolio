import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Community } from 'src/entities/community.entity';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';

@ApiTags('커뮤니티 API')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

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
}

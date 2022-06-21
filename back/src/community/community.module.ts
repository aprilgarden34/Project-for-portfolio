import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { communityRepository } from 'src/repository/community.repository';
import { likeRepository } from 'src/repository/like.repository';
import { userRepository } from 'src/repository/user.repository';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CommunityController],
  providers: [
    ...communityRepository,
    ...userRepository,
    ...likeRepository,
    CommunityService,
  ],
})
export class CommunityModule {}

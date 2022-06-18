import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';
import { DiaryModule } from './diary/diary.module';

@Module({
  imports: [UserModule, CommunityModule, DiaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

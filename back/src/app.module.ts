import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [UserModule, CommunityModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

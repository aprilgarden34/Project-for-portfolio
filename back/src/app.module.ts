import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { CommunityModule } from './community/community.module';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';

@Module({
  imports: [UserModule, CommunityModule, BookModule],
  controllers: [AppController, BookController],
  providers: [BookService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/database/database.module';
import { userRepository } from 'src/repository/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as config from 'config';
import { JWTStrategy } from './strategy/jwt.strategy';
import { kakaoStragety } from './strategy/kakao.strategy';

const jwtConfig = config.get('jwt');
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || jwtConfig.secret,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRESIN || jwtConfig.expiresIn,
      },
    }),
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [...userRepository, UserService, kakaoStragety, JWTStrategy],
  exports: [JWTStrategy, kakaoStragety, PassportModule],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userRepository } from 'src/repository/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   secret: 'Secret1234',
    //   signOptions: {
    //     expiresIn: 3600,
    //   },
    // }),
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [...userRepository, UserService], //JWTStrategy
  // exports: [JWTStrategy, PassportModule],
})
export class UserModule {}

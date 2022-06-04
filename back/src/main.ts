import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const serverConfig = config.get('server');
  const PORT = serverConfig.port;
  await app.listen(PORT);

  Logger.log(`Application running on port ${PORT}`);
}
bootstrap();

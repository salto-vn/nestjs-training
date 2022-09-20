import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // disableErrorMessages: process.env.MODE !== 'dev',
  }))
  await app.listen(3001);
}
bootstrap();

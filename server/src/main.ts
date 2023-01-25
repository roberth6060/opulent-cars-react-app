import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //Handle HTTP errors
  app.useGlobalFilters(new BaseExceptionFilter());
  //Connect backend to frontend (resource sharing)
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

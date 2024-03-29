import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Creat custom errors
  app.useGlobalPipes(new ValidationPipe());
  //Handle HTTP errors
  app.useGlobalFilters(new BaseExceptionFilter());
  //Connect backend to frontend (resource sharing)
  app.enableCors({ origin: '*' });
  //Port
  await app.listen(process.env.PORT || 5000);
}
bootstrap();

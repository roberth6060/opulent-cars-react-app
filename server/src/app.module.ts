import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/build'),
    }),
    ComponentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql.module';
import { ConfigModule } from './config.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [ConfigModule, DatabaseModule],
  exports: [ConfigModule, DatabaseModule],
})
export class CommonModule {}

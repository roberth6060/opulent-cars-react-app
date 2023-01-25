import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql.module';
import { ConfigModule } from './config.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [ConfigModule, DatabaseModule, GraphqlModule],
  exports: [ConfigModule, DatabaseModule, GraphqlModule],
})
export class CommonModule {}

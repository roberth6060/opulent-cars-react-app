import { Module } from '@nestjs/common';
import { CollectionModule } from './collection/collection.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CommonModule, CollectionModule],
})
export class ComponentsModule {}

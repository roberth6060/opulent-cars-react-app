import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CommonModule, CarsModule],
})
export class ComponentsModule {}

import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CarsModule, CommonModule, UsersModule],
})
export class ComponentsModule {}

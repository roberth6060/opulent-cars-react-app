import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsResolver } from './collection.resolver';
import { CarsService } from './collection.service';
import { Car } from './entities/collection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CollectionModule {}

import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './entities/car.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema,
      },
    ]),
  ],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}

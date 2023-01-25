import { Injectable, InternalServerErrorException } from '@nestjs/common';
// import { CreateCarInput } from './dto/create-car.input';
// import { ListCarsInput } from './dto/list-cars.input';
import { Car } from './entities/car.entity';
// import { UpdateCarInput } from './dto/update-car.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NewCarInput } from './dto/new-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });

    return newCar;
  }
}

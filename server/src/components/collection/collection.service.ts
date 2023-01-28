import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './entities/collection.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NewCarInput } from './dto/new-car.dto';
import { UpdateCarInput } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch(() => {
      throw new InternalServerErrorException();
    });
  }

  // public async getCar(id: string): Promise<Car> {
  //   return await this.carRepository.findOneBy({
  //     id,
  //   });
  // }

  public async addCar(newCarInput: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarInput);
    await this.carRepository.save(newCar).catch(() => {
      new InternalServerErrorException();
    });

    return newCar;
  }

  public async removeCar(id: string): Promise<void> {
    await this.carRepository.delete(id).catch(() => {
      new InternalServerErrorException();
    });
  }

  async updateCar(id: string, updateCarInput: UpdateCarInput): Promise<Car> {
    const updatedCar = await this.carRepository.preload({
      id: id,
      ...updateCarInput,
    });
    if (!updatedCar) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.carRepository.save(updatedCar);
  }
}

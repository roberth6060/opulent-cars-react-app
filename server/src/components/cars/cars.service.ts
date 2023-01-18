import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarInput } from './dto/create-car.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListCarsInput } from './dto/list-cars.input';
import { Car } from './entities/car.entity';
import { UpdateCarInput } from './dto/update-car.input';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name)
    private readonly carModel: Model<Car>,
  ) {}
  async getCars(paginationQuery: ListCarsInput) {
    const count = await this.carModel.count();
    const cars = await this.findAll(paginationQuery);
    return { cars, count };
  }

  create(createCarInput: CreateCarInput) {
    const car = new this.carModel(createCarInput);
    return car.save();
  }

  findAll(paginationQuery: ListCarsInput) {
    const { limit, offset } = paginationQuery;
    return this.carModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string) {
    const car = await this.carModel.findOne({ _id: id }).exec();
    if (!car) {
      throw new NotFoundException(`Car ${id} not found`);
    }
    return car;
  }

  async update(id: string, updateCarInput: UpdateCarInput) {
    const existingCar = await this.carModel
      .findOneAndUpdate({ _id: id }, { $set: updateCarInput }, { new: true })
      .exec();

    if (!existingCar) {
      throw new NotFoundException(`Car ${id} not found`);
    }
    return existingCar;
  }

  async remove(id: string) {
    const car = await this.findOne(id);
    return car.remove();
  }
}

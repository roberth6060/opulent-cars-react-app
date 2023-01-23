import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { connectionFromArraySlice } from 'graphql-relay';
import ConnectionArgs, {
  getPagingParameters,
} from '../common/relay/connection.args';
import { CarsService } from './cars.service';
import { CreateCarInput } from './dto/create-car.input';
import { ListCarsInput } from './dto/list-cars.input';
import { ListCarsResponse } from './dto/list.cars.response';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './entities/car.entity';

@Resolver(() => Car)
export class CarResolver {
  constructor(private readonly carsService: CarsService) {}

  @Mutation(() => Car)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.carsService.create(createCarInput);
  }

  @Query(() => [Car], { name: 'cars' })
  findAll(@Args('listCarsInput') listCarsInput: ListCarsInput) {
    return this.carsService.findAll(listCarsInput);
  }

  @Query(() => ListCarsResponse, { name: 'listCarsWithCursor' })
  async findAllWithCursor(
    @Args('args') args: ConnectionArgs,
  ): Promise<ListCarsResponse> {
    const { limit, offset } = getPagingParameters(args);
    const { cars, count } = await this.carsService.getCars({
      limit,
      offset,
    });
    const page = connectionFromArraySlice(cars, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });

    return { page, pageData: { count, limit, offset } };
  }

  @Query(() => Car, { name: 'car' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.carsService.findOne(id);
  }

  @Mutation(() => Car)
  updateCar(@Args('updateCarInput') updateCarInput: UpdateCarInput) {
    return this.carsService.update(updateCarInput._id, updateCarInput);
  }

  @Mutation(() => Car)
  removeCar(@Args('_id', { type: () => String }) id: string) {
    return this.carsService.remove(id);
  }
}

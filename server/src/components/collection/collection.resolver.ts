import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './collection.service';
import { NewCarInput } from './dto/new-car.dto';
import { UpdateCarInput } from './dto/update-car.dto';
import { Car } from './entities/collection.entity';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [Car])
  public async getAllCars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Query(() => Car)
  getOneCar(@Args('id', { type: () => String }) id: string) {
    return this.carsService.getCar(id);
  }

  @Mutation(() => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Car)
  public async removeCar(@Args('id') id: string): Promise<void> {
    return await this.carsService.removeCar(id).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Car)
  updateCar(@Args('updateCarInput') updateCarInput: UpdateCarInput) {
    return this.carsService.updateCar(updateCarInput.id, updateCarInput);
  }
}

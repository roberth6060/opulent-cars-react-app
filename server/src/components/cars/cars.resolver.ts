import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Query((returns) => String)
  public async cars() {
    return 'Your car shop';
  }
}

import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field()
  carLbs: number;

  @Field()
  carRwhp: number;

  @Field()
  dailyRentingPrice: number;

  @Field()
  monthlyRentingPrice: number;

  @Field()
  carPrice: number;

  @Field()
  mileage: string;

  @Field()
  carType: string;

  @Field()
  gearType: string;

  @Field({ nullable: true })
  isFeaturedCar: boolean;

  @Field()
  imageUrl: string;
}

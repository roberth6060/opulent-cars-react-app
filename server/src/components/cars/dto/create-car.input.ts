import { InputType, Field } from '@nestjs/graphql';

//dto (data transfer objects ): to manipulate data entry for your resolvers
@InputType()
export class CreateCarInput {
  @Field(() => String, { description: 'Car Name' })
  name: string;

  @Field(() => Number, { description: 'Car Daily Price' })
  dailyPrice: number;

  @Field(() => Number, { description: 'Car Monthly Price' })
  monthlyPrice: number;

  @Field(() => String, { description: 'Car Mileage' })
  mileage: string;

  @Field(() => String, { description: 'Car Gas' })
  gas: string;

  @Field(() => String, { description: 'Car gear Type' })
  gearType: string;

  @Field(() => String, { description: 'Car Url' })
  url: string;
}

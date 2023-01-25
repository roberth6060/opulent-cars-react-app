// import { InputType, Field } from '@nestjs/graphql';
// import { Max, Min } from 'class-validator';

// //dto (data transfer objects ): to manipulate data entry for your resolvers
// @InputType()
// export class CreateCarInput {
//   @Field(() => String, { description: 'Car Name' })
//   name: string;

//   @Max(1000)
//   @Min(10, { message: 'Daily price can not be so low' })
//   @Field(() => Number, { description: 'Car Daily Price' })
//   dailyPrice: number;

//   @Max(400000)
//   @Min(20000)
//   @Field(() => Number, { description: 'Car Monthly Price' })
//   monthlyPrice: number;

//   @Field(() => String, { description: 'Car Mileage' })
//   mileage: string;

//   @Field(() => String, { description: 'Car Gas' })
//   gas: string;

//   @Field(() => String, { description: 'Car gear Type' })
//   gearType: string;

//   @Field(() => String, { description: 'Car Url' })
//   url: string;
// }

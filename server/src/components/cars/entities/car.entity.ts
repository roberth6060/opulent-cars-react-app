import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Car {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  @Field(() => String, { description: 'Car Name' })
  name: string;

  @Prop()
  @Field(() => Number, { description: 'Car Daily Price' })
  dailyPrice: number;

  @Prop()
  @Field(() => Number, { description: 'Car Monthly Price' })
  monthlyPrice: number;

  @Prop()
  @Field(() => String, { description: 'Car Mileage' })
  mileage: string;

  @Prop()
  @Field(() => String, { description: 'Car Gas' })
  gas: string;

  @Prop()
  @Field(() => String, { description: 'Car gear Type' })
  gearType: string;

  @Prop()
  @Field(() => String, { description: 'Car Url' })
  url: string;
}
export const CarSchema = SchemaFactory.createForClass(Car);
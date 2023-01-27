import { NewCarInput } from './new-car.dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarInput extends PartialType(NewCarInput) {
  @Field(() => String)
  id: string;
}

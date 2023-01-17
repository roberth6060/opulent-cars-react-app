import { InputType, Int, Field } from '@nestjs/graphql';

//dto: to manipulate data entry for your resolvers
@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

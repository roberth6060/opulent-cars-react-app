import { ObjectType, Field, Int } from '@nestjs/graphql';

//entity: to set what is your “user” that you want to use as a resource
@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

import { User } from '../entities/user.entity';
import { ObjectType } from '@nestjs/graphql';
import { RelayTypes } from '../../common/relay/relay.types';

// response object that GraphQL can understand

@ObjectType()
export class ListUsersResponse extends RelayTypes<User>(User) {}

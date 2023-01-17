import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

//module: to control imports, exports and providers
@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {} //allow the application to understand that this user's resource exists.

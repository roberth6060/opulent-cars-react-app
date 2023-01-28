import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CarsService } from './components/collection/collection.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/users')
  getUsers() {
    return [{ id: 1, name: 'Robert' }];
  }
}

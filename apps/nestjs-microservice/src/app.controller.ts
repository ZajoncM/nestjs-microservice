import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUser } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() userDto: CreateUser) {
    return this.appService.createUser(userDto);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}

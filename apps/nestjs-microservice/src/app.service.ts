import { Inject, Injectable } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  private readonly users: CreateUser[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  createUser(userDto: CreateUser) {
    this.users.push(userDto);

    console.log(userDto);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(userDto.email),
    );

    this.analyticsClient.emit(
      'user_created',
      new CreateUserEvent(userDto.email),
    );

    return userDto;
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}

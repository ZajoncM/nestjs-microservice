import { Controller, Get } from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from 'apps/nestjs-microservice/src/create-user.event';

@Controller()
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Get()
  getHello(): string {
    return this.communicationService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    console.log(`COMMUNICATION - user created: ${data.email}`);
  }
}

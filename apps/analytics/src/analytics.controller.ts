import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from 'apps/nestjs-microservice/src/create-user.event';

@Controller()
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  getHello(): string {
    return this.analyticsService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    return this.analyticsService.handleUserCreated(data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  getAnalytics() {
    return this.analyticsService.getAnalytics();
  }
}

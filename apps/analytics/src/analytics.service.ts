import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from 'apps/nestjs-microservice/src/create-user.event';

@Injectable()
export class AnalyticsService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello Analytics!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('ANALYTICS - user created', data);

    this.analytics.push({ email: data.email, timestamp: new Date() });
  }

  getAnalytics() {
    return this.analytics;
  }
}

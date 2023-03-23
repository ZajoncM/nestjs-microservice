import { NestFactory } from '@nestjs/core';
import { CommunicationModule } from './communication.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CommunicationModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();

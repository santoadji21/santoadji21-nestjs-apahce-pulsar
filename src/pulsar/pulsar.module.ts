import { PulsarProducerService } from '@/pulsar/pulsar-producer.service';
import { PULSAR_CLIENT } from '@/pulsar/pulsar.constants';
import { PulsarService } from '@/pulsar/pulsar.service';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Client } from 'pulsar-client';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PULSAR_CLIENT,
      useFactory: (configService: ConfigService) =>
        new Client({
          serviceUrl: configService.getOrThrow('PULSAR_SERVICE_URL'),
        }),
      inject: [ConfigService],
    },
    PulsarProducerService,
    PulsarService,
  ],
  exports: [PulsarProducerService, PULSAR_CLIENT, PulsarService],
})
export class PulsarModule {}

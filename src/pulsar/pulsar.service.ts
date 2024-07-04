import { PULSAR_CLIENT } from '@/pulsar/pulsar.constants';
import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { Client } from 'pulsar-client';

@Injectable()
export class PulsarService implements OnModuleDestroy {
  constructor(@Inject(PULSAR_CLIENT) private readonly pulsarClient: Client) {}

  async onModuleDestroy() {
    await this.pulsarClient.close();
  }
}

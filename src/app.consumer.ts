import { TEST_TOPIC } from '@/app.constants';
import { PULSAR_CLIENT } from '@/pulsar/pulsar.constants';
import { PulsarConsumer } from '@/pulsar/pulsar.consumer';
import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pulsar-client';

@Injectable()
export class AppConsumer extends PulsarConsumer<any> {
  constructor(@Inject(PULSAR_CLIENT) pulsarClient: Client) {
    super(pulsarClient, {
      topic: TEST_TOPIC,
      subscriptionType: 'Shared',
      subscription: 'nestjs-shared',
    });
  }

  protected handleMessage(data: any) {
    this.logger.log(data);
  }
}

import { TEST_TOPIC } from '@/app.constants';
import { PulsarProducerService } from '@/pulsar/pulsar-producer.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  protected readonly logger = new Logger(AppService.name);
  constructor(private readonly pulsarProducerService: PulsarProducerService) {}

  async sendMessage(request: any) {
    for (let i = 0; i <= 100; i++) {
      await this.pulsarProducerService.produce(
        TEST_TOPIC,
        JSON.stringify({ ...request, i }),
      );
      await new Promise((resolve) => setTimeout(resolve, 200));
      this.logger.log(request);
    }
    return 'ok';
  }
}

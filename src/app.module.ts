import { AppConsumer } from '@/app.consumer';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PulsarModule } from '@/pulsar/pulsar.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PulsarModule],
  controllers: [AppController],
  providers: [AppService, AppConsumer],
})
export class AppModule {}

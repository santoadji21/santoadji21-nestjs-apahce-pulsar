import { AppModule } from '@/app.module';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = 3000;
    await app.listen(port);
    Logger.log(
      `Application is running on: http://localhost:${port}`,
      'Bootstrap',
    );
  } catch (error) {
    Logger.error(
      `Failed to start application: ${error.message}`,
      '',
      'Bootstrap',
    );
  }
}

bootstrap();

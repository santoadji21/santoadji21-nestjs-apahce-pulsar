import { AppService } from '@/app.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendMessage(@Body() request: any) {
    return this.appService.sendMessage(request);
  }

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }
}

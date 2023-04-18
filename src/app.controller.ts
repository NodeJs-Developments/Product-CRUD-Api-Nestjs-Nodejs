import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/getall")
  Hello(): string {
    return this.appService.Hello();
  }

  @Get("/get")
  @Header('Content-Type', 'text/html')
  Name(): {name: string} {
    return {name:"Anil"};
  }
}

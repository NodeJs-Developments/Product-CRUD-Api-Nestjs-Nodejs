import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  Hello(): string {
    return 'Hello Anil!';
  }
}

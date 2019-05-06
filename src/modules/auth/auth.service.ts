import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello Swallow!';
  }
  getObject(): object {
    return {
      key: 'this is response object',
    };
  }
}

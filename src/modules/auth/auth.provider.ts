import { Controller, Req, Request as R, Get, Query, Session, HttpCode, Res, Param, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthBody } from './auth.interface';
import { Request, Response } from 'express';

@Controller('swallow')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(
    @Query() query: AuthBody,
    @Query('name') name: string,
  ) {
    // response.send(`hello world`);
    // return 'hello workd glc';
    // return this.authService.getHello();
    console.log(`get body: ${JSON.stringify(query)}`);
    console.log(`get body name: ${JSON.stringify(name)}`);
    return this.authService.getObject();
  }
  @Post()
  getHelloPost(
    @Body() body: AuthBody,
    @Body('name') name: string,
  ) {
    console.log(`post body: ${JSON.stringify(body)}`);
    console.log(`post body name: ${JSON.stringify(name)}`);
    return `get hello post`;
  }
}

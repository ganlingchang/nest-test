/// <reference types="express" />
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly appService;
    constructor(appService: AuthService);
    getHello(request: Request, response: Response, name: string, age: string, r: Request, params: {
        id: string;
    }, query: {
        glc: string;
        age: string;
    }): string;
    getBoolean(req: Request, res: Response): string;
}

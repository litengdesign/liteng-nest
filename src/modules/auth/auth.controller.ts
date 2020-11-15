/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-15 17:46:58
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 17:59:20
 */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    
    @Post('login')
    async login(@Body() data: LoginDto){
        return await this.authService.login(data)
    }
}

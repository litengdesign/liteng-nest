/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-15 17:47:32
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 18:54:17
 */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from '../user/user.module'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports:[
        UserModule,
        JwtModule.register({
        secretOrPrivateKey: 'dasdfasdfasdfseweuwrewhwjw',
        signOptions:{
            expiresIn:'12h' //签发jwt有效期
        }
    })],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}

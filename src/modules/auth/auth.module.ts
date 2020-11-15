<<<<<<< HEAD
/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-15 17:47:32
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 19:53:03
 */
=======
>>>>>>> ebd776f05764638d05f85606d3da5596c9e3502f
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
<<<<<<< HEAD
    imports:[
        UserModule,
        JwtModule.register({
        secretOrPrivateKey: 'dtvbnjsdhauhdfabsidhdkaji#',
        signOptions:{
            expiresIn:'12h' //签发jwt有效期
        }
    })],
    controllers: [AuthController],
    providers: [AuthService]
=======
  imports: [
    UserModule,
    JwtModule.register({
      secretOrPrivateKey: '123456789abcdefgmkkjijnhjjjj',
      signOptions: {
        expiresIn: '12h'
      }
    }),
    PassportModule.register({
      defaultStrategy: 'jwt'
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
>>>>>>> ebd776f05764638d05f85606d3da5596c9e3502f
})
export class AuthModule { }

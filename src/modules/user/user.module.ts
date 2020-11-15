<<<<<<< HEAD
/*
 * @Author: Liteng
 * @Description: 用户module
 * @Date: 2020-11-15 12:01:01
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 19:53:51
 */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
=======
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { User } from './user.entity'
>>>>>>> ebd776f05764638d05f85606d3da5596c9e3502f

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}

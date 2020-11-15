/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-15 12:01:16
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 17:25:27
 */
import { Controller, Body, Post, Get, Param, UseInterceptors, ClassSerializerInterceptor, Put } from '@nestjs/common';
import { UserService} from './user.service';
import { UserDto, UpdatePasswordDto } from 'dist/modules/user/user.dto';
import { get } from 'http';

@Controller('users')
export class UserController {
    constructor( private readonly userService: UserService){

    }
    @Post()
    async store(@Body() data:UserDto){
        return await this.userService.store(data);
    }
    @Get()
    async index(){
        return await this.userService.index();
    }
    @Get(':id')
    @UseInterceptors(ClassSerializerInterceptor)
    async show(@Param('id') id:string){
        return await this.userService.show(id);
    }

    @Post(':id/password')
    async updatePassword(@Param('id') id:string,@Body() data:UpdatePasswordDto){
        return await this.userService.updatePassword(id,data);
    }
}

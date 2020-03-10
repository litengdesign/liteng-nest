import { Controller, Post, Body, Get, Param, ClassSerializerInterceptor, UseInterceptors, Put } from '@nestjs/common';
import { UserService} from './user.service'
import { UserDto, UpdatePasswordDto } from './user.dto';
@Controller('users')
export class UserController {
    constructor(private readonly userServer: UserService ){

    }
    @Post()
    async store(@Body() data:UserDto){
        return this.userServer.store(data);
    }

    @Get(':id')
    @UseInterceptors(ClassSerializerInterceptor)
    async show(@Param('id') id:string){
        return await this.userServer.show(id)
    }
    @Put(':id/password')
    @UseInterceptors(ClassSerializerInterceptor)
    async updatePassword(@Param('id') id:string,@Body() data:UpdatePasswordDto){
        await this.userServer.updatePassword(id, data)
    }

}

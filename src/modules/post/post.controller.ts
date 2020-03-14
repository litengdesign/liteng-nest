import { Controller, Get, Body, Post, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { PostService} from './post.service';
import { PostDto} from './post.dto';
import { AuthGuard,PassportModule} from '@nestjs/passport';
import {User} from '../../core/decorators/user.decorator'
import { User as UserEntity} from '../user/user.entity';

@Controller('posts')
export class PostController {
    constructor(private readonly postServer: PostService){

    }
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async store(@Body() data: PostDto, @User() user: UserEntity){
        return await this.postServer.store(data,user);
    }

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    async index(){
        return await this.postServer.index();
    }

    @Get(':id')
    async show(@Param('id') id:string,@Body() data:Partial<PostDto>){
        return await this.postServer.update(id,data);
    }

    @Delete(':id')
    async destory(@Param('id') id:string){
       return await this.postServer.destory(id);
    }



}

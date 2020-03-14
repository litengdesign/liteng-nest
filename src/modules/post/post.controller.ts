import { Controller, Get, Body, Post, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { PostService} from './post.service';
import { PostDto} from './post.dto';
import { AuthGuard,PassportModule} from '@nestjs/passport';
import {User} from '../../core/decorators/user.decorator'
import { User as UserEntity} from '../user/user.entity';
import { ListOptions } from '../../core/decorators/list-options.decorator';
import { ListOptionsInterface } from '../../core/interfaces/list-options.interface';
import { TransformInterceptor } from '../../core/interceptors/transform.interceptor';

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
    @UseInterceptors(ClassSerializerInterceptor,TransformInterceptor)

    async index(
        @ListOptions({limit:10}) options:ListOptionsInterface
    ){
        return await this.postServer.index(options);
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

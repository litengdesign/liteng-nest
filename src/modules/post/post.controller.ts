import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { PostService} from './post.service';
import { PostDto} from './post.dto';

@Controller('posts')
export class PostController {
    constructor(private readonly postServer: PostService){

    }
    @Post()
    async store(@Body() data: PostDto){
        return await this.postServer.store(data);
    }

    @Get()
    async index(){
        return await this.postServer.index();
    }

    @Get(':id')
    async show(@Param('id') id: string, @Body() data: Partial<PostDto>){
        return await this.postServer.update(id,data);
    }

    @Delete(':id')
    async destory(@Param('id') id: string){
       return await this.postServer.destory(id);
    }


}

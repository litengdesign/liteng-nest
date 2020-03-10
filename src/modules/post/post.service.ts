import { Injectable, Body, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { PostDto} from './post.dto'


@Injectable()
export class PostService {
    constructor(
       @InjectRepository(Post)
       private readonly postRepository:Repository<Post>
    ){}
    async store(data:PostDto){
        //创建实体
        const entity = await this.postRepository.create(data);
        //保存实体
        await this.postRepository.save(entity);
        return entity;
    }
    async index(){
        const entities = await this.postRepository.find();
        return entities;
    }
    async show(id:string){
        const entity = await this.postRepository.findOne(id);
        return entity;
    }
    async update(id:string,data:Partial<PostDto>){
        const result = await this.postRepository.update(id,data);
        return result;
    }
    async destory(id:string){
        const result = await this.postRepository.delete(id);
        return result;
    }


}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { PostDto} from './post.dto'
import { User } from '../user/user.entity';
import { ListOptionsInterface } from '../../core/interfaces/list-options.interface';


@Injectable()
export class PostService {
    constructor(
       @InjectRepository(Post)
       private readonly postRepository:Repository<Post>
    ){}
    async store(data:PostDto,user:User){
        //创建实体
        const entity = await this.postRepository.create(data);
        //保存实体
        await this.postRepository.save({
            ...entity,
            user
        });
        return entity;
    }
    async index(options:ListOptionsInterface){
        const { categories,page,limit } =  options;
        const queryBuilder = await this.postRepository.createQueryBuilder('post');
        queryBuilder.leftJoinAndSelect('post.user','user');
        queryBuilder.leftJoinAndSelect('post.category', 'category');
        queryBuilder
        .take(limit)
        .skip(limit * (page-1))
        if (categories){
            queryBuilder.where('category.alias IN (:...categories)', { categories})
        }
        
        const entities = queryBuilder.getManyAndCount();
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

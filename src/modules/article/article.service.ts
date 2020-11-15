/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-08 20:41:18
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-14 21:59:25
 */
import { Injectable, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>
    ) {}
    async store(data) {
        // 创建artice实体
        const entity = await this.articleRepository.create(data);
        await this.articleRepository.save(entity);
        return entity;
    }
    async index() {
        const entitys = await this.articleRepository.find();
        return entitys;
    }
    async show(id: string){
        const entity =  await this.articleRepository.findOne(id);
        return entity;
    }
    async update(id: string,data){
        const result = await this.articleRepository.update(id, data);
        return result;
    }
    async destroy(id: string){
        const result = await this.articleRepository.delete(id);
    }
}

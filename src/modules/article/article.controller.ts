/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-08 20:40:41
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-14 22:01:20
 */
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('articles')

export class ArticleController {
    constructor(private readonly articleService: ArticleService){
    }
    @Post()
    async store( @Body() data) {
        return await this.articleService.store(data);
    }
    @Get()
    async index() {
        return await this.articleService.index();
    }
    @Get(':id')
    async show(@Param('id') id: string) {
        return await this.articleService.show(id);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() data){
        return this.articleService.update(id,data);
    }
    @Delete(':id')
    async destory(@Param('id') id: string){
        return this.articleService.destroy(id);
    }
}

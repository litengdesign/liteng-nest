/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-08 20:39:48
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-08 22:08:45
 */
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}

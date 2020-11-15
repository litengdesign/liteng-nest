import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './modules/article/article.module';
import { PostModule } from './modules/post/post.module';
/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-08 10:51:32
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-08 22:11:26
 */

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password : 'root',
      database: 'nest-test-db',
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true,
    }),
    ArticleModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

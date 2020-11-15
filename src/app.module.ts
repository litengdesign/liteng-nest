import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './modules/article/article.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';

/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-08 10:51:32
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 19:31:57
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
    PostModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}

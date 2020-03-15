import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './modules/category/category.module';
import { FileController } from './modules/file/file.controller';
import { FileService } from './modules/file/file.service';
import { FileModule } from './modules/file/file.module';
import { FileTestModule } from './modules/file-test/file-test.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
    }),
    PostModule,
    UserModule,
    AuthModule,
    CategoryModule,
    FileModule,
    FileTestModule,
  ],
  controllers: [AppController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}

import { Module, BadRequestException } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './file.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([File]),
  ],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule { }

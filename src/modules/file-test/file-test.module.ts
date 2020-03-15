import { Module, BadRequestException } from '@nestjs/common';
import { FileTestController } from './file-test.controller';
import { FileTestService } from './file-test.service';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './file.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([File]),
    MulterModule.register({
      dest: './uploads',
      fileFilter: (req, file, callback) => {
        const mimetypes = [
          'image/png',
          'image/jpg',
          'image/jpeg'
        ];
        console.log(file.mimetype)

        const allowed = mimetypes.some(type => type === file.mimetype);

        if (allowed) {
          callback(null, true);
        } else {
          callback(new BadRequestException('不支持上传此类型的文件。'), false);
        }
      }
    })
  ],
  controllers: [FileTestController],
  providers: [FileTestService]
})
export class FileTestModule {}

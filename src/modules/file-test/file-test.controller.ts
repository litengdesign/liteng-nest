import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { FileInterceptor} from '@nestjs/platform-express';
import { FileDto } from './file.dto';
import { FileTestService } from './file-test.service';
import {Response} from 'express'

@Controller('fileTest')
export class FileTestController {
    constructor(
        private readonly fileService:FileTestService
    ) { }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async store(
        @UploadedFile() data: FileDto
    ) {
        return await this.fileService.store(data);
    }
    
    @Get('serve/:id')
    async serve(
        @Param('id',ParseIntPipe) id:number,
        @Res() res: Response
    ){
        const file = await this.fileService.show(id)
        res.sendFile(file.filename,{
            root:'uploads',
            headers:{
                'Content-type':file.mimetype
            }
        });
    }

}

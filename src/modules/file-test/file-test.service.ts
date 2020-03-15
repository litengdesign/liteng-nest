import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './file.entity';
import { Repository } from 'typeorm';
import { FileDto } from './file.dto';

@Injectable()
export class FileTestService {
    constructor(
        @InjectRepository(File)
        private readonly fileTestRepository: Repository<File> 
    ){}

    async store(data:FileDto){
        return await this.fileTestRepository.save(data)
    }

    async show(id: number) {
        return await this.fileTestRepository.findOne(id);
    }
}

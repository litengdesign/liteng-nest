import { Test, TestingModule } from '@nestjs/testing';
import { FileTestService } from './file-test.service';

describe('FileTestService', () => {
  let service: FileTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileTestService],
    }).compile();

    service = module.get<FileTestService>(FileTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

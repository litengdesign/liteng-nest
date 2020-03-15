import { Test, TestingModule } from '@nestjs/testing';
import { FileTestController } from './file-test.controller';

describe('FileTest Controller', () => {
  let controller: FileTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileTestController],
    }).compile();

    controller = module.get<FileTestController>(FileTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

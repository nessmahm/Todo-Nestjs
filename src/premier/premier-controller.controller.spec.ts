import { Test, TestingModule } from '@nestjs/testing';
import { PremierControllerController } from './premier-controller.controller';

describe('PremierControllerController', () => {
  let controller: PremierControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PremierControllerController],
    }).compile();

    controller = module.get<PremierControllerController>(PremierControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

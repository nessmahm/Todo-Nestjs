import { Test, TestingModule } from '@nestjs/testing';
import { Partie2Controller } from './partie2.controller';

describe('Partie2Controller', () => {
  let controller: Partie2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Partie2Controller],
    }).compile();

    controller = module.get<Partie2Controller>(Partie2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

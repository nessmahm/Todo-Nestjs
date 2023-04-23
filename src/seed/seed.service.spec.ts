import { Test, TestingModule } from '@nestjs/testing';
import { seedService } from './seed.service';

describe('SeedService', () => {
  let service: seedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [seedService],
    }).compile();

    service = module.get<seedService>(seedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

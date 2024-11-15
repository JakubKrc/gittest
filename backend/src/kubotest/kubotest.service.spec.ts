import { Test, TestingModule } from '@nestjs/testing';
import { KubotestService } from './kubotest.service';

describe('KubotestService', () => {
  let service: KubotestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KubotestService],
    }).compile();

    service = module.get<KubotestService>(KubotestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

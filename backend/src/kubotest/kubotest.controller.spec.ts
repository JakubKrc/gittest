import { Test, TestingModule } from '@nestjs/testing';
import { KubotestController } from './kubotest.controller';
import { KubotestService } from './kubotest.service';

describe('KubotestController', () => {
  let controller: KubotestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KubotestController],
      providers: [KubotestService],
    }).compile();

    controller = module.get<KubotestController>(KubotestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

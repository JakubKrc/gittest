import { Module } from '@nestjs/common';
import { KubotestService } from './kubotest.service';
import { KubotestController } from './kubotest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kubotest } from './entities/kubotest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kubotest])],
  controllers: [KubotestController],
  providers: [KubotestService],
})
export class KubotestModule {}

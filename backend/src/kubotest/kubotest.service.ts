import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKubotestDto } from './dto/create-kubotest.dto';
import { UpdateKubotestDto } from './dto/update-kubotest.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Kubotest } from './entities/kubotest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KubotestService {
  constructor(
    @InjectRepository(Kubotest)
    private readonly kubotestRepository: Repository<Kubotest>) {}

  async create(createKubotestDto: CreateKubotestDto) {
    const kubo = this.kubotestRepository.create(createKubotestDto)
    return await this.kubotestRepository.save(kubo);
  }

  async findAll() {
    return await this.kubotestRepository.find();
  }

  async findOne(id: number) {
    return await this.kubotestRepository.findOne({ where: {id}} );
  }

  async update(id: number, updateKubotestDto: UpdateKubotestDto) {
    const kubo  = await this.findOne(id);

    if(!kubo)
      throw new NotFoundException();

    Object.assign(kubo, updateKubotestDto);
    return await this.kubotestRepository.save(kubo)
  }

  async remove(id: number) {
    const kubo  = await this.findOne(id);

    if(!kubo)
      throw new NotFoundException();

    return await this.kubotestRepository.remove(kubo);
  }
}

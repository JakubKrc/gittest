import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { KubotestService } from './kubotest.service';
import { CreateKubotestDto } from './dto/create-kubotest.dto';
import { UpdateKubotestDto } from './dto/update-kubotest.dto';

@Controller('kubotest')
export class KubotestController {
  constructor(private readonly kubotestService: KubotestService) {}

  @Post()
  create(@Body() createKubotestDto: CreateKubotestDto) {
    return this.kubotestService.create(createKubotestDto);
  }

  @Get()
  findAll() {
    return this.kubotestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('email') email:string) {
    console.log({id, email})
    return this.kubotestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKubotestDto: UpdateKubotestDto) {
    return this.kubotestService.update(+id, updateKubotestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kubotestService.remove(+id);
  }
}

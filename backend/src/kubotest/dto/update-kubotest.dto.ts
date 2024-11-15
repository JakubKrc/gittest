import { PartialType } from '@nestjs/mapped-types';
import { CreateKubotestDto } from './create-kubotest.dto';

export class UpdateKubotestDto extends PartialType(CreateKubotestDto) {}

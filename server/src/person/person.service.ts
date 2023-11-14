import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Person} from "./schemas/person.schema";

@Injectable()
export class PersonService {
  constructor(@InjectModel(Person.name) private catModel: Model<Person>) {}

  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}

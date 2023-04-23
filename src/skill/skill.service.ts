import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import {CvService} from "../cv/cv.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Skill} from './entities/skill.entity'
import {Repository} from "typeorm";
import {randJobDescriptor, randSkill} from "@ngneat/falso";
import {Cv} from "../cv/entities/cv.entity";
import {CrudService} from "../crud/crud.service";
@Injectable()
export class SkillService extends CrudService<Skill>{
  constructor( private readonly cvService:CvService,
               @InjectRepository(Skill)
               private skillRepository : Repository<Skill>
  ) { super(skillRepository) }

  async createSkills():Promise<Skill[]>
  {

  return
  }

}

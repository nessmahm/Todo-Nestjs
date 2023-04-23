import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Repository} from "typeorm";
import {Cv} from './entities/cv.entity'
import {UserService} from "../user/user.service";
import {randFirstName, randJobTitle} from "@ngneat/falso";
import {seedService} from "../seed/seed.service";
import {CrudService} from "../crud/crud.service";
import {CreateUserDto} from "../user/dto/create-user.dto";

@Injectable()
export class CvService extends CrudService<Cv>{
  constructor(private readonly userService: UserService,
              private readonly seedService: seedService,
      @InjectRepository(Cv)
      private cvRepository:Repository<Cv>

  ) {  super(cvRepository)}

  async createCvs():Promise<any>{

    return this.seedService.seed();
  }
async create(dto:CreateCvDto):Promise<any>
{

  if( !await this.userService.findById(dto.user.toString()))
  {
      return "User not found ! create user first !! "
  }
  console.log("user exists !")
  return super.create(dto);
}

  async JoinUsers():Promise<any>{

    return await this.cvRepository.createQueryBuilder("cv")
        .leftJoin("cv.user","user")
        .select(["user.username","cv.name","cv.id"])
        .getRawMany()
  }
  async countSkills():Promise<any>{

    return await this.cvRepository.createQueryBuilder("cv")
        .leftJoin("cv.skills","skill")
        .select(["cv.id","count(cv.id)"])
        .groupBy("cv.id")
        .getRawMany()
  }
  async JoinSkills():Promise<any>{

    const cvsBySkills = await this.cvRepository.createQueryBuilder("cv")
        .leftJoin("cv.skills","skill")
        .select(["cv.id","skill.designation"] )
        .orderBy('cv.id', 'ASC')
        .getRawMany();

  const listOfCvs:Cv[] = await this.cvRepository.find();
  const cvs = []
  for (const item of listOfCvs)
    {
      const id = item.id;
      const skills = cvsBySkills
          .filter(cv => cv.cv_id === item.id)
          .map(cv => cv.skill_designation);
      cvs.push({id:item.id,skills:skills})
    }


      return cvs;


  }

  async findCvBySkill (skill : string ):Promise<any>
  {   console.log(skill)
    return await this.cvRepository.createQueryBuilder('cv')
        .leftJoin('cv.skills','skill')
        .select(['cv.id','skill.designation'])
        .where("skill.designation =:skill", {skill:skill})
        .getMany()
  }
}

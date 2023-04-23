import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import {CvService} from "../cv/cv.service";
import {UserService} from "../user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Cv} from "../cv/entities/cv.entity";
import {Skill} from "./entities/skill.entity";
import {seedService} from "../seed/seed.service";

@Module({
  imports:[TypeOrmModule.forFeature([User,Cv,Skill])],
  controllers: [SkillController],
  providers: [SkillService,CvService,UserService,seedService]
})
export class SkillModule {}

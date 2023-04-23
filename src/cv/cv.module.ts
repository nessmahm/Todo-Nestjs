import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Cv} from "./entities/cv.entity"
import {UserService} from "../user/user.service";
import {SeederService} from "nestjs-seeder/dist/seeder/seeder.service";
import {seedService} from "../seed/seed.service";
import {CrudService} from "../crud/crud.service";
@Module({
  imports:[TypeOrmModule.forFeature([User,Cv])],
  controllers: [CvController],
  providers: [CvService,UserService,seedService]
})
export class CvModule {}

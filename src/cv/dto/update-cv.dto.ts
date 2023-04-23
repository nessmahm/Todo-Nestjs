import { PartialType } from '@nestjs/mapped-types';
import { CreateCvDto } from './create-cv.dto';
import {UpdateDto} from "../../crud/dto/crud.dto";
import {Column} from "typeorm";
import {IsOptional} from "class-validator";
import {Skill} from "../../skill/entities/skill.entity";

export class UpdateCvDto extends UpdateDto {

        @Column()
        @IsOptional()
        age : number;

        @Column()
        @IsOptional()
        path:string ;
        @Column()
        @IsOptional()
        skills : Skill[];

}

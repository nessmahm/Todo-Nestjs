import { Injectable } from '@nestjs/common';
import {Cv} from "../cv/entities/cv.entity";
import {Connection, Repository} from "typeorm";
import {User} from "../user/entities/user.entity";
import {Skill} from "../skill/entities/skill.entity";
import {randEmail, randFirstName, randJobTitle, randPassword, randSkill} from "@ngneat/falso";

@Injectable()
export class seedService {

    constructor(   private connection: Connection  ) {}
    async seed ():Promise<any>
    {
        console.log("seeed service : --- ")
        const userRepository = this.connection.getRepository(User);
        const skillRepository = this.connection.getRepository(Skill);
        const cvRepository = this.connection.getRepository(Cv);


        const cvs:Cv[]=await cvRepository.find();
        for(let i=0;i<5;i++)
        {
            const skill = {designation:randSkill(), cvs : [cvs[i] , cvs[1+i],cvs[3+i]]}
            await skillRepository.save(skill);
            console.log(skill);
        }


    }
}

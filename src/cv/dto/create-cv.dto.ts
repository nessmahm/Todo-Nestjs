import {CreateDto} from "../../crud/dto/crud.dto";
import {Column, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {Skill} from "../../skill/entities/skill.entity";
import {IsNotEmptyObject} from "class-validator";

export class CreateCvDto extends CreateDto{
    @IsNotEmptyObject()
    @Column()
    name :string;
    @IsNotEmptyObject()
    @Column()
    firstname :string;
    @IsNotEmptyObject()
    @Column()
    age :number;
    @IsNotEmptyObject()
    @Column()
    cin :string;
    @IsNotEmptyObject()
    @Column()
    job :string;
    @IsNotEmptyObject()
    @Column()
    path :string;
    @Column()
    @IsNotEmptyObject()

    user : User ;
    @Column()
    @IsNotEmptyObject()

    skills: Skill[];
}

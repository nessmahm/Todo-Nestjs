import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cv} from "../../cv/entities/cv.entity";
import {BaseEntity} from "../../crud/baseentity.entity";

@Entity()
export class Skill extends BaseEntity{

    @Column()
    designation:string;
    @ManyToMany(() => Cv, cv => cv.skills)
    cvs: Cv[];
}

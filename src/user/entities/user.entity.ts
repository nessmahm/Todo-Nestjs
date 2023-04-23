import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cv} from "../../cv/entities/cv.entity";
import {BaseEntity} from "../../crud/baseentity.entity";

@Entity()
export class User extends BaseEntity{

    @Column()
    username:string;
    @Column()
    email:string;
    @Column()
    password:string;
    @OneToMany(() => Cv, (cv)=>cv.user )
    cvs : Cv[];

}


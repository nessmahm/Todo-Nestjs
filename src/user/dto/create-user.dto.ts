import {CreateDto} from "../../crud/dto/crud.dto";
import {Column, OneToMany} from "typeorm";
import {Cv} from "../../cv/entities/cv.entity";

export class CreateUserDto extends CreateDto{

    @Column()
    username:string;
    @Column()
    email:string;
    @Column()
    password:string;
    @OneToMany(() => Cv, (cv)=>cv.user )
    cvs : Cv[];
}

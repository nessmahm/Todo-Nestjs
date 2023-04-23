import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {Skill} from "../../skill/entities/skill.entity";
import {BaseEntity} from "../../crud/baseentity.entity";


@Entity()
export class Cv extends BaseEntity{


    @Column()
    name :string;
    @Column()
    firstname :string;
    @Column()
    age :number;
    @Column()
    cin :string;
    @Column()
    job :string;
    @Column()
    path :string;
    @ManyToOne( ()=>User,(user)=>user.cvs)
    user : User ;
    @ManyToMany( ()=>Skill , skill => skill.cvs )
    @JoinTable()
    skills: Skill[];
}

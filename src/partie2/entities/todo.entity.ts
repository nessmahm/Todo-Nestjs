import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {TodoStatusEnum} from "../../app.module";
import { ReusableColumn } from "./reusableColumn.entities"
@Entity()
export class TodoEntity extends ReusableColumn{
    @PrimaryGeneratedColumn("uuid")
    id : string ;
    @Column()
    name:string;
    @Column()
    description:string;
   /* @CreateDateColumn(
        )
    createdAt: Date;


    @UpdateDateColumn(
        {
             }
    )
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;


    */

    @Column()
    statut:string;
}
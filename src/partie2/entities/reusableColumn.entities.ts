import {CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from "typeorm";

export class ReusableColumn {

    @CreateDateColumn({update:false,nullable:true})
    createdAt : Date ;

    @UpdateDateColumn({nullable:true})
    updatedAt : Date ;

    @DeleteDateColumn()
    deletedAt:Date ;
}
import {TodoStatusEnum} from "./todo-module.module";
import {generateUuid} from "../uuid.util";

export class TodoModel {
   public id:string  ;
   public name:string;
   public description:string;
   public date_de_creation:Date;
   public statut:TodoStatusEnum = TodoStatusEnum.waiting;

    constructor(name: string, description: string, statut?: TodoStatusEnum) {
        this.id = generateUuid();
        this.name = name;
        this.description = description;
        this.statut = statut;
        this.date_de_creation= new Date();
    }
}

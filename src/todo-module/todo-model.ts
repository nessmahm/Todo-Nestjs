import {generateUuid} from "../uuid.util";
import {TodoStatusEnum} from "../app.module";

export class TodoModel {
   public id:string  ;
   public name:string;
   public description:string;
   public date_de_creation:Date;
   public statut:string = TodoStatusEnum.waiting;

    constructor(name: string, description: string, statut?: string) {
        this.id = generateUuid();
        this.name = name;
        this.description = description;
        this.statut = statut;
        this.date_de_creation= new Date();
    }
}

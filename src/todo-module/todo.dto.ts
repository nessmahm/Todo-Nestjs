import {IsDefined, IsIn, IsOptional, IsString, Length, MinLength} from 'class-validator';
import {TodoStatusEnum} from "../app.module";

export  class AddTodo {
    @IsString()
    @Length(3,10)
    @IsDefined({message :"Nom est Obligatoire "})
    name:string;
    @IsString()
    @MinLength(6)
    @IsDefined({message :"Description est Obligatoire "})
    description:string;
    @IsOptional()
    @IsIn(["En cours","En attente","Finalisé"])

    statut:string= TodoStatusEnum.actif;


}

export  class UpdateTodo{
    @IsString()
    @Length(3,10 , {message : 'Name should have more than 3 caracteres and less than 6'})
    @IsOptional()
    name:string;


    @IsString( { message : ' Description is not a string '})
    @MinLength(6, {message : ' Description length should have more than 6 char'})
    @IsOptional()

    description:string;
    @IsOptional()
    @IsIn(["En cours","En attente","Finalisé"])
    statut:string;
}
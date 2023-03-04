import {TodoStatusEnum} from "./todo-module.module";
import {generateUuid} from "../uuid.util";
import {IsString, IsEmail, MinLength, IsOptional,IsDefined, IsNotEmptyObject} from 'class-validator';

export  class AddTodo {
    @IsString()
    @MinLength(3)
    @IsDefined()
    name:string;
    @IsString()
    @MinLength(6)
    @IsDefined()
    description:string;
    @IsOptional()
    statut:TodoStatusEnum;


}

export  class UpdateTodo{
    @IsString()
    @MinLength(3)
    @IsOptional()
    name:string;
    @IsString()
    @MinLength(6)
    @IsOptional()

    description:string;
    @IsOptional()

    statut:TodoStatusEnum;
}
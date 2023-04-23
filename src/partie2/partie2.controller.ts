import {Body, Controller,Request, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from '@nestjs/common';
import {AddTodo, UpdateTodo} from "../todo-module/todo.dto";
import {TodoService} from "../todo-module/todo.service";
import {Partie2Service} from "./partie2.service";
import {TodoEntity} from "./entities/todo.entity";
import {SearchTodo} from "./entities/todo.tdo";
import {IsOptional} from "class-validator";
import {randEmail, randFirstName, randFullName, randPassword} from "@ngneat/falso";

@Controller('todo2')
export class Partie2Controller {
    constructor( private TodoModuleService : Partie2Service){}


    @Get('gettodos')

   async getTodos (@Request()req ,@Query('nombre' ) nombre?:any  ):Promise<any>
    {    const  data = await this.TodoModuleService.getTodos(parseInt(nombre))
         return {
            data,
            req : req.userId
        };
    }

    @Post("")

     addToDoRepository( @Body() todo:AddTodo):Promise<TodoEntity>{
        return  this.TodoModuleService.postTodo(todo);
    }

    @Post("/2")
    addToDoNoRepo(@Body() todo:AddTodo)
    {
        return this.TodoModuleService.postTodoWithoutRepo(todo)
    }

    @Get('/get/:id')
    async getById(@Param('id') id:string  ): Promise<TodoEntity>
    {
        return await this.TodoModuleService.getById(id);
    }

    @Put('/:id')
    async updateById(@Param('id')id:string,@Body() todo:UpdateTodo):Promise<TodoEntity>{
        return await this.TodoModuleService.updateById(id,todo);
    }

    @Delete('/:id')
    async deleteById(@Param('id')id:string):Promise<string>{

        return  await this.TodoModuleService.removeById(id)
    }
    @Delete('/softdelete/:id')
    async softdeleteById(@Param('id')id:string):Promise<string>{

        return  await this.TodoModuleService.sooftDeleteById(id)
    }

    @Get("restore/:id")
    async restoreTodo(@Param('id')id:string):Promise<TodoEntity>{
        return await this.TodoModuleService.restoreTodo(id);
    }

    @Get("statut")
        async statusTodos():Promise<string>{
        return await this.TodoModuleService.countStatut();
    }

    @Get ("todo/:chaine/:statut")
    async getTodo(@Param('chaine')chaine:string,@Param('statut')statut:string ):Promise<any>
    {
        return await this.TodoModuleService.getTodo(chaine,statut);
    }
    @Get ("search/chaine/:statut")
    async searchTodo1(@Param('chaine')chaine:string,@Param('statut')statut:string ):Promise<any>
    {
        const todo : SearchTodo = {
            critere: chaine,
            statut:statut
        }
        return await this.TodoModuleService.searchTodo1(todo);
    }
    @Get ("search1/:chaine?/:statut?")
    async searchTodo2(@Param('chaine')chaine:string,@Param('statut')statut:string ):Promise<any>
    {
        const todo : SearchTodo = {
            critere: chaine,
            statut:statut
        }

        return await this.TodoModuleService.searchTodo2(todo);
    }




}

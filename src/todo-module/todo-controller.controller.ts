import {Controller,Param, Get,Put,Post,Patch,Delete,Body} from '@nestjs/common';
import {TodoModel} from './todo-model';
import {AddTodo,UpdateTodo} from "./todo.dto";
import {TodoService} from "./todo.service";
@Controller('todo')

export class TodoControllerController {
    constructor( private TodoModuleService : TodoService){}

    @Get('')
    getTodos(): any {
    return (this.TodoModuleService.getTodos())
    }
    @Post ('')
    addTodo(@Body() todo : AddTodo ): any {
        return (this.TodoModuleService.addTodo(todo));

    }
    @Get('getodo/:id')
    getById(@Param('id') id:string  ): any {

        return( this.TodoModuleService.getById(id) );
    }
    @Delete ('delete/:id')
    deleteById (@Param ('id')id:string):any {
        return (this.TodoModuleService.deleteById(id))
    }

    @Put('update/:id')
    updateById(@Param('id')id:string, @Body() todo: UpdateTodo ) :any {

        return (this.TodoModuleService.updateById(id,todo))
    }






}

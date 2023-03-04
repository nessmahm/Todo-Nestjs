import {Body, Injectable, Param} from '@nestjs/common';
import {TodoModel} from "./todo-model";
import {AddTodo,UpdateTodo} from "./todo.dto";

@Injectable()
export class TodoService {
    todos:TodoModel[]=[] ;
    getTodos () : any {
        return (this.todos.length==0 ? "is empty" : this.todos);

    }
    addTodo ( todo:AddTodo) :any {
        const newtodo = new TodoModel(todo.name,todo.description,todo.statut);
        this.todos.push(newtodo);
        return (newtodo);
    }
    getById( id:string  ): any {

        const todo = this.todos.find((actual) => actual.id == id);
        return (todo);
    }
    deleteById (id:string):any {
        const todo = this.todos.findIndex((actual) => actual.id == id);
        if (todo != null) {
            this.todos.splice(todo, 1);
            return ("deleted succefully");
        }
        return ("todo not found");
    }
    updateById(id:string,todo: UpdateTodo ) :any {

        const tdo=this.todos.find((actual)=>actual.id==id);
        if( tdo != null )
        {
            if(todo.description!=null) {tdo.description=todo.description}
            if(todo.name!=null) {tdo.name=todo.name}
            if(todo.statut!=null) {tdo.statut=todo.statut}
            return tdo;
        }
        return ("todo not found");
    }
}

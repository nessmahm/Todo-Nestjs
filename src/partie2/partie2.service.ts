import {Injectable, NotFoundException} from '@nestjs/common';
import {Like, Repository} from "typeorm";
import {TodoEntity} from "./entities/todo.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {AddTodo, UpdateTodo} from "../todo-module/todo.dto";
import {createConnection} from "mysql2";
import {TodoStatusEnum} from "../app.module";
import {SearchTodo} from "./entities/todo.tdo";

@Injectable()
export class Partie2Service {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepository: Repository<TodoEntity>
    ) {
    }

    async getTodos(nombre:number): Promise<TodoEntity[]> {
        if(isNaN(nombre))
        return await this.todoRepository.find();
        else
            return await this.todoRepository.find({take : nombre})
    }


    async postTodo(todo: AddTodo): Promise<TodoEntity> {
        return await this.todoRepository.save(todo);
    }

    postTodoWithoutRepo(todo: AddTodo): any {
        const connection = createConnection({
            host: 'localhost',
            user: 'root',
            port: 3307,
            password: '',
            database: 'nestjsdb',
        });


        console.log('Attempting to connect to database...');

        connection.connect((error) => {
            if (error) {
                console.error('Error connecting to database:', error);
                connection.end();
                return;
            }

            console.log('Successfully connected to database.');

            const query = `INSERT INTO todo (name, description, statut) VALUES ('${todo.name}', '${todo.description}', '${todo.statut}')`;

            console.log('Executing query:', query);

            connection.query(query, (error, results, fields) => {
                if (error) {
                    console.error('Error executing query:', error);
                    connection.end();
                    return;
                }

                console.log('Query executed successfully. Results:', results);

                connection.end();
            });
        });
    }

  async  getById(id:string):Promise<TodoEntity>{
      const todo =  await this.todoRepository.findOneBy({ id:id } );
      if (!todo)
      {
          throw new NotFoundException('todo introuvable');
      }
      return todo ;
    }

    async updateById(id:string,todo:UpdateTodo):Promise<TodoEntity>{
        const todoToUpdate= await this.getById(id);

        if (!todoToUpdate) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }
        todoToUpdate.name = todo.name || todoToUpdate.name;
        todoToUpdate.description = todo.description || todoToUpdate.description;
        todoToUpdate.statut = todo.statut || todoToUpdate.statut;

        await this.todoRepository.save(todoToUpdate);

        return todoToUpdate;

    }

    async removeById(id:string):Promise<string>{
        const todo= await this.getById(id)
        await this.todoRepository.remove(todo);
        return "deleted successfully";
    } catch (error) {
        console.log(error);
        return "deletion failed";
    }

    async sooftDeleteById(id:string):Promise<string>{
        await this.todoRepository.softDelete(id)
        return ("todo deleted succefully !! ")
    }

    //restore just updates the DeletedAt column

    async restoreTodo(id:string):Promise<TodoEntity>
    {
        await this.todoRepository.restore(id) ;
        return await this.getById(id);
    }
    async countStatut():Promise<string>
    {
        const enAttenteTodo = await this.todoRepository.count({where:{statut:TodoStatusEnum.waiting}})
        const actifTodo = await this.todoRepository.count({where:{statut:TodoStatusEnum.actif}})
        const finalTodo = await this.todoRepository.count({where:{statut:TodoStatusEnum.done}})
        return ("Number of actif todos is "+actifTodo+", number of waiting todos is "+enAttenteTodo+", number of done todos is "+finalTodo);
    }

    async getTodo(chaine:string,statut:string):Promise<any>
    {

        const todo = await this.todoRepository.find(
            {where : [
                    {name:Like(`%${chaine}%`)},
                    {description : Like (`%${chaine}%`)},
                    {statut: statut}

                ] });
        if(todo.length==0)
        {return ("there's no todos")}
        return todo ;
    }
    async searchTodo1(todo:SearchTodo):Promise<any>
    {

        const Stodo = await this.todoRepository.find(
            {where : [
                    {name:Like(`%${todo.critere}%`)},
                    {description : Like (`%${todo.critere}%`)},
                    {statut: todo.statut}

                ] });
        if(Stodo.length==0)
        {return ("there's no todos")}
        return Stodo ;
    }

    async searchTodo2(todo:SearchTodo):Promise<any>
    {

       if(todo.critere==null && todo.statut==null)
           return await (this.getTodos(null));

       if(todo.critere==null || todo.statut==null)
         {return ("there's no todos")}

        const Stodo = await this.todoRepository.find(
            {where : [
                    {name:Like(`%${todo.critere}%`),statut: todo.statut},
                    {description : Like (`%${todo.critere}%`),statut: todo.statut}
                ] });
        if(Stodo.length==0)
        {return ("there's no todos")}
        return Stodo ;
    }
}

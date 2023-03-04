import { Module } from '@nestjs/common';
import { TodoControllerController } from './todo-controller.controller';
import { TodoService } from './todo.service';
export enum TodoStatusEnum {
  'actif' = "En cours",
  'waiting' = "En attente",
  'done' = "Finalisé"
}
@Module({
  controllers: [TodoControllerController],
  providers: [TodoService]
})
export class TodoModuleModule {}

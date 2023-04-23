import { Module } from '@nestjs/common';
import { TodoControllerController } from './todo-controller.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoControllerController],
  providers: [TodoService]
})
export class TodoModuleModule {}

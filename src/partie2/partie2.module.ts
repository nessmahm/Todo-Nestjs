import { Module } from '@nestjs/common';
import { Partie2Controller } from './partie2.controller';
import { Partie2Service } from './partie2.service';
import {TypeOrmCoreModule} from "@nestjs/typeorm/dist/typeorm-core.module";
import {TodoEntity} from "./entities/todo.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([TodoEntity])],
  controllers: [Partie2Controller],
  providers: [Partie2Service]
})
export class Partie2Module {}

import {MiddlewareConsumer, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { CommonModule } from './common/common.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { Partie2Module } from './partie2/partie2.module';
import {TodoEntity} from "./partie2/entities/todo.entity";
import {AuthentifMiddleware} from "./middleware/authentif.middleware"
export enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
}
import * as dotenv from 'dotenv'
import {Partie2Controller} from "./partie2/partie2.controller";
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { CvModule } from './cv/cv.module';
import {Cv} from "./cv/entities/cv.entity";
import {Skill} from "./skill/entities/skill.entity";
import {User} from "./user/entities/user.entity";
import {seedService} from "./seed/seed.service";
import { CrudService } from './crud/crud.service';
import { SeedModule } from './seed/seed.module';
dotenv.config();
@Module({
  imports: [PremierModule, ConfigModule.forRoot(),TodoModuleModule, CommonModule,
    TypeOrmModule.forRoot(
        {type: 'mysql',
                host: process.env.DB_HOST ,
                port: 3307,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: 'nestjsdb',
                entities: [TodoEntity,Cv,Skill,User],
                synchronize: true,
                autoLoadEntities:true
        }),
    Partie2Module,
    UserModule,
    SkillModule,
    CvModule,
    SeedModule,
     ],
  controllers: [AppController],
  providers: [AppService,seedService],
})
export class AppModule {
    configure (consumer:MiddlewareConsumer)
    {
         consumer
             .apply(AuthentifMiddleware)
             .forRoutes()
    }
}

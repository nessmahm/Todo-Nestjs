import {MiddlewareConsumer, Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv'
import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoEntity} from "../partie2/entities/todo.entity";
import {Cv} from "../cv/entities/cv.entity";
import {Skill} from "../skill/entities/skill.entity";
import {User} from "../user/entities/user.entity";
import {seedService} from "./seed.service";
import { CvModule } from '../cv/cv.module';
import { UserModule } from '../user/user.module';
import { SkillModule } from '../skill/skill.module';
import { AppService } from '../app.service';
import { AppController } from '../app.controller';

dotenv.config();

    // @ts-ignore
@Module({
        imports: [ConfigModule.forRoot(),
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
            UserModule,
            SkillModule,
            CvModule,

        ],
        controllers: [AppController],
        providers: [AppService,seedService],
    })
    export class SeedModule {


}

import {Get, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from './entities/user.entity'
import {randEmail, randFirstName, randPassword} from "@ngneat/falso";
import {CrudService} from "../crud/crud.service";
@Injectable()
export class UserService extends CrudService<User>{
  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,

  ) {super(userRepository)}
  async createUsers():Promise<any> {

  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {CreateDto} from "../../crud/dto/crud.dto";

export class UpdateUserDto extends  CreateDto {}

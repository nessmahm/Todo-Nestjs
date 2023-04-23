import {
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn, Entity,
} from 'typeorm';
@Entity()
export abstract class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;


}
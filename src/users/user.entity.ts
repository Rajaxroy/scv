import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;


    @AfterInsert()
    logInsert() {
        console.log('Insert User with Id: ', this.id)
    }

    @AfterUpdate() 
    logUpdate() {
        console.log('updated user with id', this.id)
    }
}
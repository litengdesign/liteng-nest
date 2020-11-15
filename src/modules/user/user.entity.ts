/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-15 12:02:55
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 17:09:30
 */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {Exclude} from 'class-transformer';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{unique:true})
    name: string;
    
    @Column()
    @Exclude()
    password: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
    
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password,12);
    }
    async comparePassword(password:string){
        return await bcrypt.compare(password,this.password);
    }
}
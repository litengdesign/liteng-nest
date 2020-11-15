/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-08 10:51:33
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-08 20:50:37
 */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    title: string;

    @Column('longtext', { nullable: true })
    body: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
    @Column()
    marker: string;
}
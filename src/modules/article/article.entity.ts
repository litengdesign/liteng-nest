/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-08 20:42:37
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-14 22:06:01
 */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Article {
   @PrimaryGeneratedColumn()
   id: number;
   @Column()
   title: string;
   @Column('longtext')
   body: string;
   @CreateDateColumn()
   created: Date;
   @UpdateDateColumn()
   updated: Date;
}

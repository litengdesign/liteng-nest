/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-15 12:01:32
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 18:16:04
 */
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository} from 'typeorm';
import { UserDto, UpdatePasswordDto } from 'dist/modules/user/user.dto';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly UserRespository: Repository<User>
    ){ }
    // user add 
    async store(data:UserDto){
        const {name} = data;
        const user = await this.UserRespository.findOne({name});
        if(user){
            throw new BadRequestException('用户已经存在了!');
        }
        const entity = await this.UserRespository.create(data);
        await this.UserRespository.save(entity);
        return entity;
    }
    /**
     * user list
     */
    async index(){
        return this.UserRespository.find();
    }

    async show(id: string){
        const entity = this.UserRespository.findOne(id);
        if(!entity){
            throw new NotFoundException('没有找到用户。')
        }
        return entity;
    }

    /**
     * update
     *  */ 
    async updatePassword(id:string, data:UpdatePasswordDto){
        const {password, newPassword} = data;
        const entity = await this.UserRespository.findOne(id);
        if(!entity){
           throw new NotFoundException('没有找到用户');
        }
        const pass = await (await entity).comparePassword(password);
        if(!pass){
            throw new BadRequestException('密码验证失败。');
        }
        entity.password = newPassword;
        return await this.UserRespository.save(entity);
    }

    /**
     * 根据用户名查找用户
     */
    async findUserByName(name:string){
        return await this.UserRespository.findOne({name})
    }
}

<<<<<<< HEAD
/*
 * @Author: Liteng
 * @Description: Description
 * @Date: 2020-11-15 17:46:49
 * @LastEditors: Liteng
 * @LastEditTime: 2020-11-15 19:51:18
 */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service'
=======
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService} from '../user/user.service'
>>>>>>> ebd776f05764638d05f85606d3da5596c9e3502f
import { LoginDto } from './auth.dto';
import { JwtPayload } from './auth.interface';
import {JwtService} from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UserService,
<<<<<<< HEAD
        // private readonly jwtService: JwtService
=======
        private readonly jwtService:JwtService
>>>>>>> ebd776f05764638d05f85606d3da5596c9e3502f
    ){}
    async login(data:LoginDto){
<<<<<<< HEAD
       const {name,password} = data;
       const entity = await this.userService.findUserByName(name);
       if(!entity){
           throw new UnauthorizedException('没有找到该用户！')
       }
       if(!(await entity.comparePassword(password))){
        throw new UnauthorizedException('密码不匹配！')
       }
       return entity;
    //    const { id } = entity;
    //    const payload = {id,name};
    //    const token = this.signToken(payload);
    //    return {
    //        ...payload,
    //        token
    //    };
    }

    // signToken(data:JwtPayload){
    //     return this.jwtService.sign(data);   
    // }

=======
        const { name, password} = data;
        const entity =  await this.userService.findByName(name);

        if(!entity){
            throw new UnauthorizedException('用户名不存在');
        }
        if (!(await entity.comparePassword(password))){
            throw new UnauthorizedException('密码不匹配');
        }
        const {id} = entity;
        const palyload = {id,name};
        const token = this.signToken(palyload)
        return {
            ...palyload,
            token
        }
    }
    signToken(data:JwtPayload){
        return this.jwtService.sign(data);
    }
    
>>>>>>> ebd776f05764638d05f85606d3da5596c9e3502f
}

import { Body, Inject, Injectable } from '@nestjs/common';
import { Model } from "mongoose"
import { IUser } from './users.schema';

@Injectable()
export class UserService {
   constructor(
      @Inject('UserModelToken') private readonly userModel: Model<IUser>
      ){}
      async filterUser(body){
         const name = await this.userModel.findOne({"name": body.name})
         const email = await this.userModel.findOne({"email": body.email})
         if(name || email){
            console.log(name + " " + email)
            console.log("есть такое имя или емейл")
            return false
         }
         else {
            console.log(name + " " + email)
            console.log("нет такого")
            return true
         } 
      }
      async signUpUser(body){
         console.log("б0ди", body)
         return await this.userModel.create(body)
      }
      async getAll(){
         return await this.userModel.find()
      }
      async findUser(body){
        return await this.userModel.findOne(body).lean().exec()
      }
}

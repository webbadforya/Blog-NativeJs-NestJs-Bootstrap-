import { Inject, Injectable } from '@nestjs/common';
import { Model, ObjectId } from "mongoose"
import { IUser } from 'src/users/users.schema';

@Injectable()
export class PostService {
   constructor(
      @Inject('PostModelToken') private readonly postModel: Model<IUser>
   ){}
   async addPost(body){
      return await this.postModel.create(body);
   }
   async getAllPosts(){
      return await this.postModel.find().lean().exec();
   }
   async deletePostById(id:string){
      console.log(id)
      return await this.postModel.deleteOne({"_id": id});
   }
}

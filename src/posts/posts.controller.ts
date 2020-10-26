import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BlogPost } from './posts.schema';
import { PostService } from './posts.service';

@Controller('posts')
export class PostController {
   constructor(
      public postService: PostService
   ){}
   @Post("/add")
   async addPost(@Body() body: BlogPost){
      return await this.postService.addPost(body)
   }
   @Get("/all")
   async getAllPosts(){
      return await this.postService.getAllPosts()
   }
   @Delete("delete/:id")
   async deletePost(@Param() data: { id: string }){
      return await this.postService.deletePostById(data.id)
   }
}

import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { User } from './users.schema';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
   constructor(public userService: UserService) {
   }
   @Put("/signup")
   async signUpUser(@Body() body: User){
      console.log(body)
      if(await this.userService.filterUser(body)){
         await this.userService.signUpUser(body)
         return await "User registered"
      }
      else return await ""
   }
   @Get("/all")
  async getAllUsers(){
   return await this.userService.getAll()
   }
   @Post("/login")
   async logIn(@Body() body: User){   
      const res = await this.userService.findUser(body);
      if(res) return `${res.name}`
      else ""
   }
   @Post("/gay")
   async gay(@Body() bodya){ 
return {
   ...bodya,
   loh: "Loshara"
}
   }
}

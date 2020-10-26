import * as mongoose from 'mongoose';

export const userSchema: any = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

export interface User {
   name: string;
   email: string;
   password: string
}

export interface IUser extends Document, User {
}
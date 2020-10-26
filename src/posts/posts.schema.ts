import * as mongoose from 'mongoose';
import { ObjectId } from "mongoose"

export const postSchema: any = new mongoose.Schema({
  name: String,
  title: String,
  message: String,
  date: String
});

export interface BlogPost {
  name: string,
  title: string,
  message: string,
  date: string
}

export interface IBlogPost extends Document, BlogPost {
}
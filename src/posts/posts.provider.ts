  
import { Connection, Document, Model } from 'mongoose';
import { postSchema } from './posts.schema';

export const postProvider: any = 
  {
    provide: 'PostModelToken',
    useFactory: (connection: Connection): Model<Document> => connection.model('postModel', postSchema),
    inject: ['DbConnectionToken'],
  }
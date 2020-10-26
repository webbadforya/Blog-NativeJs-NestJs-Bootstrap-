  
import { Connection, Document, Model } from 'mongoose';
import { userSchema } from './users.schema';

export const userProvider: any = 
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection): Model<Document> => connection.model('userModel', userSchema),
    inject: ['DbConnectionToken'],
  }
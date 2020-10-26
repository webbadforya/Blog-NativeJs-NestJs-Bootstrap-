import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from './config.module';

@Module({
  imports: [DatabaseModule, UsersModule, PostsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

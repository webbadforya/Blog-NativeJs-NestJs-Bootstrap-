import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PostController } from './posts.controller';
import { postProvider } from './posts.provider';
import { PostService } from './posts.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [PostService, postProvider]
})
export class PostsModule {}

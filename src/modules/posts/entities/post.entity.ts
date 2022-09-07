import { ObjectType, Field, Int } from '@nestjs/graphql';
import {User} from 'src/modules/users/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int, { description: 'Post id' })
  id: number;

  @Field(() => String, { description: 'Post title' })
  title: string;

  @Field(() => String, { description: 'Post content' , nullable: true})
  content?: string;

  @Field(() => Boolean, { description: 'Post published' , nullable: true})
  published?: boolean;

  @Field(() => User, { description: 'Post author'})
  author: User;

  @Field(() => Int, { description: 'Post author id'})
  authorId: number;

}

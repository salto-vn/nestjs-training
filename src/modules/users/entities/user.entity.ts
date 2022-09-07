import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Post} from 'src/modules/posts/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'User id' })
  id: number;

  @Field(() => String, { description: 'User email' })
  email: string;

  @Field(() => String, { description: 'User name' })
  name: string;

  @Field(() => [Post], {description: 'User posts' , nullable: true})
  posts?: Post[]
}

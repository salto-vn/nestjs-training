import { InputType, Int, Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'Title' })
  title: string;

  @Field(() => String, { description: 'Content' })
  content: string;

  @Field(() => Boolean, { description: 'Published', defaultValue: false })
  published: boolean;

  // @Field(() => User, { description: 'User model' })
  // author: User

  @Field(() => Int, { description: 'Author Id' })
  authorId: number;
}

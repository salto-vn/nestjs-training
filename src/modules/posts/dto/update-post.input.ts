import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType, ArgsType } from '@nestjs/graphql';

@ArgsType()
@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => Int)
  id: number;
}

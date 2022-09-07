import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType, ArgsType } from '@nestjs/graphql';

@ArgsType()
@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String , {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  password?: string;
}

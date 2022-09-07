import { InputType, Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
@InputType()
export class LoginUserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

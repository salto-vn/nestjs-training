import { InputType, Field, ArgsType } from '@nestjs/graphql';
import {IsEmail} from 'class-validator';

@ArgsType()
@InputType()
export class LoginUserInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

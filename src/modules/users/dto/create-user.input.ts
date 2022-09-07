import { InputType, Field, ArgsType } from '@nestjs/graphql';
import {IsEmail} from 'class-validator';
@ArgsType()
@InputType()
export class CreateUserInput {

  @IsEmail()
  @Field(() => String, { description: 'User email' })
  email: string;

  @Field(() => String, { description: 'User name' })
  name: string;

  @Field(() => String, { description: 'User password' })
  password: string;

}

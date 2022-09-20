import { InputType, Field, ArgsType } from '@nestjs/graphql';
import {IsEmail, MinLength} from 'class-validator';

@ArgsType()
@InputType()
export class LoginUserInput {
  @IsEmail()
  @MinLength(6)
  @Field(() => String)
  email: string;

  @MinLength(6)
  @Field(() => String)
  password: string;
}

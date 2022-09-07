import { InputType, Field, ArgsType } from '@nestjs/graphql';
import {IsEmail, IsString, MinLength} from 'class-validator';
@ArgsType()
@InputType()
export class CreateUserInput {

  @IsEmail()
  @Field(() => String, { description: 'User email' })
  email: string;

  @IsString()
  @MinLength(6)
  @Field(() => String, { description: 'User name' })
  name: string;

  @IsString()
  @MinLength(6)
  @Field(() => String, { description: 'User password' })
  password: string;

}

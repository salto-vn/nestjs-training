import { CreateUserInput } from './create-user.input';
import { InputType, Field,  PartialType, ArgsType } from '@nestjs/graphql';
import {IsPhoneNumber} from 'class-validator';

@ArgsType()
@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String , {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  password?: string;
  
  @IsPhoneNumber()
  @Field(() => String,{ description: 'User phone' })
  phone: string;
}

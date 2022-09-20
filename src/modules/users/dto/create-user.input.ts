import { InputType, Field, ArgsType } from '@nestjs/graphql';
import {IsEmail, IsPhoneNumber, IsString, MinLength} from 'class-validator';
import {IsValidRelation} from 'src/decorators/valid-relationship.decorator';
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

  @IsPhoneNumber('VI',{message: 'Số điện thoại không đúng'})
  @Field(() => String, { description: 'User phone' })
  phone: string;

  @IsValidRelation('relation',{ message: 'Invalid relationship'})
  @Field(() => String, { description: 'User relation ship' })
  inRelationship: 'single' | 'married' | 'divorce'

}

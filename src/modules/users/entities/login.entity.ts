import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserLogin {
  @Field(() => String, { description: 'Access token' })
  accessToken: string;
}

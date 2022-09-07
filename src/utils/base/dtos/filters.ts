import {InputType, Field, ArgsType, Int} from '@nestjs/graphql';

@ArgsType()
@InputType()
export class BaseFilterArgs {
  @Field(() => [Int], {description: 'Limit item per page', nullable: true})
  ids?: string[];

  @Field(() => Int, {description: 'Limit item per page', nullable: true})
  limit?: number;

  @Field(() => Int, {description: 'Current size page', nullable: true})
  offset?: number;
}

import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class BaseArgs<T> {
  protected fields: T;
  constructor(fields: T){
    this.fields = fields;
  }
}

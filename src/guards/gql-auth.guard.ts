import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {GqlExecutionContext} from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    let hasToken = false;
    const request = this.getRequest(context);
    if (
      (request && request.headers['Authorization']) ||
      request.headers['authorization']
    ) {
      hasToken = true;
    }

    if (isPublic && !hasToken) {
      return true;
    }
    return true;
  }
}

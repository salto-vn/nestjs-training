import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {UserLogin} from './entities/login.entity';
import {LoginUserInput} from './dto/login-user.input';
import {Body, UseGuards} from '@nestjs/common';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Body() @Args() args: CreateUserInput) {
    return this.usersService.create(args);
  }

  @UseGuards()
  @Mutation(() => UserLogin)
  loginUser(@Body() @Args() args: LoginUserInput) {
    return this.usersService.login(args);
  }

  @Query(() => [User], { name: 'getUserList' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'getUserDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Query(() => User, { name: 'getUserPosts' })
  findUserPosts(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findUserWithPost(id);
  }

  @Mutation(() => User)
  updateUser(@Body() @Args('id', { type: () => Int }) id: number ,@Args() args: UpdateUserInput) {
    return this.usersService.update(id, args);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}

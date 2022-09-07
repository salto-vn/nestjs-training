import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from 'src/prisma.service';
import {CreateUserInput} from './dto/create-user.input';
import {LoginUserInput} from './dto/login-user.input';
import {UpdateUserInput} from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserInput) {
    const isExistUser = await this.prisma.user.findFirst({where: {email: data.email}});
    if (isExistUser) throw new HttpException('User have already existed', HttpStatus.BAD_REQUEST);
    return await this.prisma.user.create({data, include: {posts: true}});
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findUserWithPost(id: number) {
    return await this.prisma.user.findUnique({where: {id}, include: {posts: true}});
  }

  async update(id: number, data: UpdateUserInput) {
    return await this.prisma.user.update({where: {id}, data});
  }

  async remove(id: number) {
    return await this.prisma.user.delete({where: {id}});
  }

  async login(data: LoginUserInput) {
    const result = await this.prisma.user.findFirst({where: data});
    if (result) {
      return {
        accessToken: `${data.email}_+_${data.password}`
      };
    }
    throw new HttpException('Wrong email or password', HttpStatus.NOT_FOUND);
  }
}

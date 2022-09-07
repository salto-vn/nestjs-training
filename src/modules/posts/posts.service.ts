import {Injectable} from '@nestjs/common';
import {PrismaService} from 'src/prisma.service';
import {CreatePostInput} from './dto/create-post.input';
import {UpdatePostInput} from './dto/update-post.input';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreatePostInput) {
    return this.prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        published: data.published,
        author: {
          connect: {
            id: data.authorId,
          },
        }
      },
    });
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

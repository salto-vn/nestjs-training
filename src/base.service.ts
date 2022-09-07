import {Injectable} from '@nestjs/common';
import {PrismaService} from './prisma.service';

@Injectable()
export class BaseService {
  protected offset: number;
  protected limit: number;
  protected model: PrismaService

  constructor(limit = 20, offset = 0) {
    this.limit = limit;
    this.offset = offset;
  }

  async paginate(){
    return;
  }

}

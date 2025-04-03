import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { fullTextSearch } from '@prisma/client/sql';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello() {
    const term = `AI systems implications Balancing`;
    // return this.prisma.article.findMany({ where: { published: true } });
    return this.prisma.$queryRawTyped(fullTextSearch(term));
  }
}

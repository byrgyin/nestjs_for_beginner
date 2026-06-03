import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.services";

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService) {
  }
  findAll(){

    return this.prisma.flower.findMany();

    // return [
    // {
    //   name:'Rose',
    //   color: 'Red',
    //   price: 5,
    // },
    //   {
    //     name:'Lily',
    //     color: 'White',
    //     price: 6,
    //   },
    //   {
    //     name:'Tulip',
    //     color: 'Yellow',
    //     price: 7,
    //   },
    // ]
  }
}

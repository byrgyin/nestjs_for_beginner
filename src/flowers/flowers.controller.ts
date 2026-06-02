import {Controller, Get, ParseIntPipe, Query, UseGuards, UseInterceptors} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import {AuthGuard} from "../conception/guard";
import {LogginInterceptor} from "../conception/interceptor";

@Controller('flowers')
@UseInterceptors(LogginInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }
}

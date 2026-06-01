import {Controller, Get, ParseIntPipe, Query, UseGuards} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import {AuthGuard} from "../conception/guard";

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }
}

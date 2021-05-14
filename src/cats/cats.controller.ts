import { Request } from 'express';

import { Controller, Delete, Get, HttpCode, Param, Post, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }

  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Delete(':id')
  remove(@Param() params) {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}

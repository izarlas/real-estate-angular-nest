import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseInterface } from './house.interface';
import { HouseDto } from './house.dto';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get()
  @HttpCode(200)
  findAll(): Promise<HouseInterface[]> {
    return this.houseService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<HouseInterface | null> {
    return this.houseService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() house: HouseDto): Promise<HouseInterface> {
    return this.houseService.create(house);
  }

  @Put(':id')
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() house: HouseDto,
  ): Promise<HouseInterface | null> {
    return this.houseService.update(id, house);
  }

  @Patch(':id')
  @HttpCode(200)
  partialUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() house: Partial<HouseDto>,
  ): Promise<HouseInterface | null> {
    return this.houseService.partialUpdate(id, house);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<HouseInterface | null> {
    return this.houseService.remove(id);
  }
}

import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  Put,
  Req,
} from "@nestjs/common";
import { HouseService } from "./house.service";
import { House } from "./house.entity";

@Controller("house")
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get()
  @HttpCode(200)
  findAll(@Req() request: Request): House[] {
    return;
  }

  @Get(":id")
  @HttpCode(200)
  findOne(): House {
    return;
  }

  @Post()
  @HttpCode(201)
  create() {}

  @Put(":id")
  @HttpCode(200)
  update() {}

  @Patch(":id")
  @HttpCode(200)
  partialUpdate() {}

  @Delete(":id")
  @HttpCode(204)
  remove() {}
}

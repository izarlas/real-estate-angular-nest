import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { House } from "./house.entity";

@Injectable()
export class HouseService {
  constructor(@InjectRepository(House) private repository: Repository<House>) {}

  findAll() {}

  findOne() {}

  create() {}

  update() {}

  partialUpdate() {}

  remove() {}
}

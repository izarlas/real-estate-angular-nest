import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HouseEntity } from "./house.entity";
import { HouseInterface } from "./house.interface";

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(HouseEntity) private repository: Repository<HouseEntity>
  ) {}

  async findAll(): Promise<HouseInterface[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HouseInterface | null> {
    return this.repository.findOne({ where: { id } });
  }

  async create(house: HouseInterface): Promise<HouseInterface> {
    const newHouse = this.repository.create(house);

    return this.repository.save(newHouse);
  }

  async update(
    id: number,
    house: HouseInterface
  ): Promise<HouseInterface | null> {
    return this.updateCommon(id, house);
  }

  async partialUpdate(
    id: number,
    house: Partial<HouseInterface>
  ): Promise<HouseInterface | null> {
    return this.updateCommon(id, house);
  }

  async remove(id: number): Promise<HouseInterface | null> {
    const house = await this.findOne(id);
    if (!house) return null;

    await this.repository.delete(id);

    return house;
  }

  private async updateCommon(id: number, house: Partial<HouseInterface>) {
    await this.repository.update(id, house);

    return this.findOne(id);
  }
}

import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HouseEntity } from '../house/house.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedDbService implements OnModuleInit {
  constructor(
    @InjectRepository(HouseEntity)
    private readonly houseRepository: Repository<HouseEntity>,
  ) {}

  async onModuleInit() {
    const count = await this.houseRepository.count();

    if (count === 0) {
      await this.houseRepository.save([
        {
          name: 'House One',
          city: 'NYC',
          state: 'NY',
          photo: 'house0.jpg',
          availableUnits: 2,
          wifi: true,
          laundry: false,
        },
        {
          name: 'House Two',
          city: 'San Francisco',
          state: 'CA',
          photo: 'house1.jpg',
          availableUnits: 3,
          wifi: true,
          laundry: true,
        },
        {
          name: 'House Three',
          city: 'Austin',
          state: 'TX',
          photo: 'house2.jpeg',
          availableUnits: 1,
          wifi: false,
          laundry: true,
        },
        {
          name: 'House Four',
          city: 'Seattle',
          state: 'WA',
          photo: 'house3.jpeg',
          availableUnits: 4,
          wifi: true,
          laundry: false,
        },
        {
          name: 'House Five',
          city: 'Chicago',
          state: 'IL',
          photo: 'house0.jpg',
          availableUnits: 2,
          wifi: false,
          laundry: false,
        },
        {
          name: 'House Six',
          city: 'Miami',
          state: 'FL',
          photo: 'house1.jpg',
          availableUnits: 3,
          wifi: true,
          laundry: true,
        },
        {
          name: 'House Seven',
          city: 'Denver',
          state: 'CO',
          photo: 'house2.jpeg',
          availableUnits: 2,
          wifi: true,
          laundry: false,
        },
        {
          name: 'House Eight',
          city: 'Boston',
          state: 'MA',
          photo: 'house3.jpeg',
          availableUnits: 1,
          wifi: false,
          laundry: true,
        },
        {
          name: 'House Nine',
          city: 'Los Angeles',
          state: 'CA',
          photo: 'house1.jpg',
          availableUnits: 3,
          wifi: true,
          laundry: true,
        },
        {
          name: 'House Ten',
          city: 'Atlanta',
          state: 'GA',
          photo: 'house0.jpg',
          availableUnits: 2,
          wifi: false,
          laundry: true,
        },
        {
          name: 'House Eleven',
          city: 'Phoenix',
          state: 'AZ',
          photo: 'house2.jpeg',
          availableUnits: 4,
          wifi: true,
          laundry: false,
        },
      ]);
    }
  }
}

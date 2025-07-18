import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseEntity } from '../house/house.entity';
import { SeedDbService } from './seedDb.service';

@Module({
  imports: [TypeOrmModule.forFeature([HouseEntity])],
  providers: [SeedDbService],
})
export class SeedDbModule {}

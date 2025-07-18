import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseModule } from './house/house.module';
import { SeedDbModule } from './seed-db/seedDb.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['DATABASE_HOST'],
      port: 5432,
      username: process.env['DATABASE_USERNAME'],
      password: process.env['DATABASE_PASSWORD'],
      database: process.env['DATABASE'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    HouseModule,
    SeedDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

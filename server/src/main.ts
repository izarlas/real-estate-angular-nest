import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataSource } from 'typeorm';
import { HouseEntity } from './house/house.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get(DataSource);

  const repository = dataSource.getRepository(HouseEntity);
  const count = await repository.count();
  if (count === 0) {
    await repository.save([
      {
        name: 'House A',
        city: 'NYC',
        state: 'NY',
        photo: '/assets/1.jpg',
        availableUnits: 2,
        wifi: true,
        laundry: false,
      },
      // Add more seeds
    ]);
  }

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Real Estate API documentation')
    .setDescription('API documentation for the Real Estate endpoints')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

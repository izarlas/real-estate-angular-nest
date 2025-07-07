import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', '..', 'dist/my-app/browser'));
  app.setBaseViewsDir(join(__dirname, '..', '..', 'dist/my-app/browser'));
  app.setViewEngine('html');

  app.use('*', (req: Request, res: Response) => {
    const indexHtml = join(
      __dirname,
      '..',
      '..',
      'dist/my-app/browser/index.html',
    );
    res.sendFile(indexHtml);
  });

  await app.listen(3000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { ImageUploadInterceptor } from './image.interceptor';

@Module({
  imports: [],
  providers: [ImageService, ImageUploadInterceptor],
  controllers: [ImageController],
})
export class ImageModule {}

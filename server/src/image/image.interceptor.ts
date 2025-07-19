import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Injectable()
export class ImageUploadInterceptor implements NestInterceptor {
  private readonly interceptor;

  constructor(private readonly imageService: ImageService) {
    this.interceptor = FileInterceptor('image', {
      storage: this.imageService.getStorageOptions(),
    });
  }

  intercept(context: ExecutionContext, next: CallHandler) {
    return this.interceptor.intercept(context, next);
  }
}

import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { ImageUploadInterceptor } from './image.interceptor';

@Controller('image')
export class ImageController {
  @Post('upload')
  @HttpCode(201)
  @UseInterceptors(ImageUploadInterceptor)
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return {
      filename: file.filename,
      url: `uploads/${file.filename}`,
    };
  }
}

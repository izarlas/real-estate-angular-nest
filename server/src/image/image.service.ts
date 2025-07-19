import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class ImageService {
  generateFilename(originalName: string): string {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    return `${uniqueSuffix}${extname(originalName)}`;
  }

  getStorageOptions() {
    return diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const filename = this.generateFilename(file.originalname);
        callback(null, filename);
      },
    });
  }
}

import { Controller, Get, StreamableFile, Res, Header, Post, Req } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';
import {ApiResponse} from '@nestjs/swagger';

@Controller('upload')
export class UploadController {
  // constructor(private readonly uploadService: UploadService) {}

  // @Post()
  // create(@Body() createUploadDto: CreateUploadDto) {
  //   return this.uploadService.create(createUploadDto);
  // }

  @Get()
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="'+ Date.now() +'_file.json"',
    });
    return new StreamableFile(file);
  }

  @Post()
  uploadFile(@Req() req: any): boolean {
    console.log("file upload", req);
    return true;
  }

  // Or even:
  @Get('/test')
  @ApiResponse({description: ""})
  @Header('Content-Type', 'application/json')
  // @Header('Content-Disposition', 'attachment; filename="test.txt"')
  getStaticFile(@Res() res: Response) {
    const src = createReadStream(join(process.cwd(), 'public/upload/test.txt'));
    // return new StreamableFile(file);
    // return file.pipe(file);

    // const file = createReadStream(join(process.cwd(), 'package.json'));

    console.log("dddd")
    src.pipe(res);
  }  
}

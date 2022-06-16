import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Book } from 'src/entities/book.entity';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  private logger = new Logger(`BookController`);
  constructor(private readonly bookService: BookService) {}
}

import { Inject, Injectable } from '@nestjs/common';
import { Book } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
// import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private readonly bookRepository: Repository<Book>,
  ) {}
  private books: Book[] = [];

  async getBooks(): Promise<Book[]> {
    const books = await this.books;
    return books;
  }

  async createBook() {
    //createBookDto: CreateBookDto
    //: Promise<Book[]>
    // const {} = createBookDto;
    // const book= this.bookRepository.create({});
    // return book[];
  }
}

import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    private booksService: BooksService;

    constructor(booksService: BooksService) {
        this.booksService = booksService;
    }

    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    @Get(':bookId')
    async getBook(@Param('bookId') bookId) {
        const book = await this.booksService.getBook(bookId);
        return book;
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookId);
        return books;
    }
}

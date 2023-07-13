/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-dgetAllFacultiesisable @typescript-eslint/no-explicit-any */

import { IBook } from './book.interface';
import { Book } from './book.model';

const getAllBooks = async (): Promise<IBook[]> => {
  const books = await Book.find();
  return books;
};

export const BookService = {
  getAllBooks,
};

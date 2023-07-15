/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-dgetAllFacultiesisable @typescript-eslint/no-explicit-any */

import { IBook } from './book.interface';
import { Book } from './book.model';

const getAllBooks = async (): Promise<IBook[]> => {
  const books = await Book.find();
  return books;
};

const getLatestBooks = async (): Promise<IBook[]> => {
  const books = await Book.find().sort({ $natural: -1 }).limit(10);
  return books;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const book = Book.findById(id);
  return book;
};

const addNewBook = async (payload: IBook): Promise<void> => {
  if (payload) {
    await Book.create(payload);
  }
};

export const BookService = {
  getAllBooks,
  getLatestBooks,
  getSingleBook,
  addNewBook,
};

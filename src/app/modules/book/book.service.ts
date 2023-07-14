/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-dgetAllFacultiesisable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { checkDateFormat } from '../../../shared/checkDateFormat';
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

const addNewBook = async (payload: IBook): Promise<void> => {
  if (payload) {
    if (checkDateFormat(payload.publicationDate)) {
      await Book.create(payload);
    } else {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        'Provide accurate date formate -> (dd-mm-yyyy)'
      );
    }
  }
};

export const BookService = {
  getAllBooks,
  getLatestBooks,
  addNewBook,
};

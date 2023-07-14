import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const books = await BookService.getAllBooks();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully !',
    data: books,
  });
});

const getLatestBooks = catchAsync(async (req: Request, res: Response) => {
  const books = await BookService.getLatestBooks();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully !',
    data: books,
  });
});

export const BookController = {
  getAllBooks,
  getLatestBooks,
};

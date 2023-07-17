import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IStatus } from './readingStatus.interface';
import { ReadingStatusService } from './readingStatus.service';

const addBook = catchAsync(async (req: Request, res: Response) => {
  const { id, status } = req.query;
  const user = req.headers.authorization;
  await ReadingStatusService.addBook(
    id as string,
    status as IStatus,
    user as string
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Current book status: ${status}`,
  });
});

export const ReadingStatusController = { addBook };

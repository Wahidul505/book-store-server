import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProduct } from './product.interface';
import { ProductService } from './product.service';

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const products = await ProductService.getAllProducts();

  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully !',
    data: products,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ProductService.getSingleProduct(id);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully !',
    data: result,
  });
});

const getCommentsOfSingleProduct = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ProductService.getCommentsOfSingleProduct(id);

    sendResponse<Partial<IProduct>>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Comments retrieved successfully !',
      data: result,
    });
  }
);

const commentOnSingleProduct = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const comment = req.body;
    await ProductService.commentOnSingleProduct(id, comment);

    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Commented successfully',
    });
  }
);

// const updateFaculty = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const result = await FacultyService.updateFaculty(id, updatedData);

//   sendResponse<IFaculty>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'faculty updated successfully !',
//     data: result,
//   });
// });

// const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await FacultyService.deleteFaculty(id);

//   sendResponse<IFaculty>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'faculty deleted successfully !',
//     data: result,
//   });
// });

export const ProductController = {
  getAllProducts,
  getSingleProduct,
  commentOnSingleProduct,
  getCommentsOfSingleProduct,
};

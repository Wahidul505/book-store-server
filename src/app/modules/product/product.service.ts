/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-dgetAllFacultiesisable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IProduct } from './product.interface';
import { Product } from './product.model';

const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await Product.find();
  return products;
};

const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  return result;
};

const commentOnSingleProduct = async (
  id: string,
  commentData: { comment: string }
): Promise<void> => {
  const product = await Product.findById({ _id: id });
  if (product) {
    const comments = [...product.comments, commentData.comment];
    await Product.findOneAndUpdate(
      { _id: id },
      {
        comments: comments,
      },
      { new: true }
    );
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Product not found');
  }
};

const getCommentsOfSingleProduct = async (
  id: string
): Promise<Partial<IProduct> | null> => {
  const result = await Product.findById(id, { comments: 1 });
  return result;
};

// const updateFaculty = async (
//   id: string,
//   payload: Partial<IFaculty>
// ): Promise<IFaculty | null> => {
//   const isExist = await Faculty.findOne({ id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Faculty not found !');
//   }

//   const { name, ...FacultyData } = payload;
//   const updatedFacultyData: Partial<IFaculty> = { ...FacultyData };

//   if (name && Object.keys(name).length > 0) {
//     Object.keys(name).forEach(key => {
//       const nameKey = `name.${key}` as keyof Partial<IFaculty>;
//       (updatedFacultyData as any)[nameKey] = name[key as keyof typeof name];
//     });
//   }

//   const result = await Faculty.findOneAndUpdate({ id }, updatedFacultyData, {
//     new: true,
//   });
//   return result;
// };

// const deleteFaculty = async (id: string): Promise<IFaculty | null> => {
//   // check if the faculty is exist
//   const isExist = await Faculty.findOne({ id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Faculty not found !');
//   }

//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();
//     //delete faculty first
//     const faculty = await Faculty.findOneAndDelete({ id }, { session });
//     if (!faculty) {
//       throw new ApiError(404, 'Failed to delete student');
//     }
//     //delete user
//     await User.deleteOne({ id });
//     session.commitTransaction();
//     session.endSession();

//     return faculty;
//   } catch (error) {
//     session.abortTransaction();
//     throw error;
//   }
// };

export const ProductService = {
  getAllProducts,
  getSingleProduct,
  commentOnSingleProduct,
  getCommentsOfSingleProduct,
};

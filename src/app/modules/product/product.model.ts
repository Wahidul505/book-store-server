import { Schema, model } from 'mongoose';
import { IProduct, ProductModel } from './product.interface';

const ProductSchema = new Schema<IProduct, ProductModel>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: {
    type: [String],
    required: true,
  },
});

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);

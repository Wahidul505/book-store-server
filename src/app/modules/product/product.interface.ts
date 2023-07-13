import { Model } from 'mongoose';

export type IProduct = {
  name: string;
  image: string;
  price: number;
  features: string[];
  status: boolean;
  rating: number;
  comments: string[];
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;

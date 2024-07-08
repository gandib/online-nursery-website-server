import { Types } from 'mongoose';

export type TProduct = {
  title: string;
  category: Types.ObjectId;
  description: string;
  price: number;
  rating: number;
  isDeleted: boolean;
};

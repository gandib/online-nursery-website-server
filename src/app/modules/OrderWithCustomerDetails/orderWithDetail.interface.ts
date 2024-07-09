import { Types } from 'mongoose';

export type TOrderWithDetail = {
  productId: Types.ObjectId;
  price: number;
  quantity: number;
  name: string;
  phone: string;
  address: string;
  status?: 'paid' | 'unpaid';
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { Product } from '../Product/product.model';
import { TOrderWithDetail } from './orderWithDetail.interface';
import { OrderWithDetail } from './orderWithDetail.model';
import AppError from '../../errors/appError';
import httpStatus from 'http-status';

const createOrder = async (payload: TOrderWithDetail) => {
  const product = await Product.findById(payload.productId);
  let result;

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }

  const newQuantity = product?.quantity - payload.quantity;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    if (payload.quantity <= product?.quantity) {
      // update quantity in Product's quantity
      const updateProduct = await Product.findOneAndUpdate(
        { _id: payload.productId },
        { $set: { quantity: newQuantity } },
        { new: true, session },
      );

      if (!updateProduct) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          'Faild to update a quantity of product!',
        );
      }

      payload.price = product.price * payload.quantity;

      result = await OrderWithDetail.create([payload], { session });

      if (!result?.length) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create an order!');
      }

      await session.commitTransaction();
      await session.endSession();
    } else {
      throw new AppError(httpStatus.BAD_REQUEST, 'Insufficient quantity!');
    }
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, error);
  }

  return result;
};

export const orderWithDetailServices = {
  createOrder,
};

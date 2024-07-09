import { Product } from '../Product/product.model';
import { TOrderWithDetail } from './orderWithDetail.interface';
import { OrderWithDetail } from './orderWithDetail.model';

const createOrder = async (payload: TOrderWithDetail) => {
  const product = await Product.findById(payload.productId);
  let result;

  if (!product) {
    throw new Error(
      'ProductId is not valid or not found in product collection!',
    );
  }

  const newQuantity = product?.quantity - payload.quantity;

  if (payload.quantity <= product?.quantity) {
    // update quantity in Product's quantity
    await Product.findOneAndUpdate(
      { _id: payload.productId },
      { $set: { quantity: newQuantity } },
      { new: true },
    );

    payload.price = product.price * payload.quantity;

    result = await OrderWithDetail.create(payload);
  } else {
    throw new Error('Insufficient quantity!');
  }
  return result;
};

export const orderWithDetailServices = {
  createOrder,
};

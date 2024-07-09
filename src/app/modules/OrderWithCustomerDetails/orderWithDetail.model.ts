import { model, Schema } from 'mongoose';
import { TOrderWithDetail } from './orderWithDetail.interface';

const orderWithDetailSchema = new Schema<TOrderWithDetail>({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  status: {
    type: String,
    enum: { values: ['paid', 'unpaid'], message: '{VALUE} is not valid!' },
    default: 'unpaid',
  },
});

export const OrderWithDetail = model<TOrderWithDetail>(
  'OrderWithDetail',
  orderWithDetailSchema,
);

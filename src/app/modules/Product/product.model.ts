import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
  title: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const Product = model<TProduct>('Product', productSchema);

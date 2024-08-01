import { model, Schema } from 'mongoose';
import { TCategory } from './category.interface';

const categorySchema = new Schema<TCategory>({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

// deleted category not sent to client
categorySchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Category = model<TCategory>('Category', categorySchema);

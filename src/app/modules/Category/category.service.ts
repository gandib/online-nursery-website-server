import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategory = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getAllCategories = async () => {
  const result = await Category.find();
  return result;
};

const getSingleCategory = async (id: string) => {
  const result = await Category.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category not found!');
  }

  return result;
};

const deleteCategory = async (id: string) => {
  const result = await Category.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const updateCategory = async (id: string, payload: TCategory) => {
  const result = await Category.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const categoryServices = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};

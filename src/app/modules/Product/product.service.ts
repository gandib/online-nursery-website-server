import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { Category } from '../Category/category.model';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './product.constant';

const createProduct = async (payload: TProduct) => {
  const category = await Category.findById(payload.category);

  if (!category) {
    throw new AppError(httpStatus.NOT_FOUND, 'Category not found!');
  }

  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    Product.find().populate('category'),
    query,
  )
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();

  return {
    meta,
    result,
  };
};

export const productServices = {
  createProduct,
  getAllProducts,
};

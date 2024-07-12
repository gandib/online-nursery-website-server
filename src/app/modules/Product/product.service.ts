import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './product.constant';

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
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

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found!');
  }

  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const updateProduct = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const getAllCategories = async () => {
  const result = await Product.aggregate([
    {
      $group: { _id: null, categories: { $addToSet: '$category' } },
    },
  ]);

  return result;
};

export const productServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  getAllCategories,
};

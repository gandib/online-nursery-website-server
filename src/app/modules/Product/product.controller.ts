import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await productServices.createProduct(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is created successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productServices.getAllProducts(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

export const productControllers = {
  createProduct,
  getAllProducts,
};

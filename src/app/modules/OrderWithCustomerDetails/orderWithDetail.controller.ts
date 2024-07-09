import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { orderWithDetailServices } from './orderWithDetail.service';

const createOrder = catchAsync(async (req, res) => {
  const result = await orderWithDetailServices.createOrder(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order is created successfully',
    data: result,
  });
});

export const orderWithDetailControllers = {
  createOrder,
};

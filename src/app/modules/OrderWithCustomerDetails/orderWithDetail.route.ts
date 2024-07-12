import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { orderWithDetailValidations } from './orderWithDetail.validation';
import { orderWithDetailControllers } from './orderWithDetail.controller';

const router = express.Router();

router.post(
  '/create-order',
  validateRequest(orderWithDetailValidations.orderWithDetailValidationSchema),
  orderWithDetailControllers.createOrder,
);

export const orderWithDetailRoutes = router;

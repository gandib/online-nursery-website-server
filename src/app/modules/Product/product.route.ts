import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productValidations } from './product.validation';
import { productControllers } from './product.controller';

const router = express.Router();

router.post(
  '/create-product',
  validateRequest(productValidations.createProductValidationSchema),
  productControllers.createProduct,
);

router.get('/', productControllers.getAllProducts);

export const productRouts = router;

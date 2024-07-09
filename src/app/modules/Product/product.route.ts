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

router.get('/categories', productControllers.getAllCategories);

router.get('/', productControllers.getAllProducts);

router.get('/:id', productControllers.getSingleProduct);

router.delete('/:id', productControllers.deleteProduct);

router.patch(
  '/:id',
  validateRequest(productValidations.updateProductValidationSchema),
  productControllers.updateProduct,
);

export const productRouts = router;

import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidations } from './category.validation';
import { categoryControllers } from './category.controller';

const router = express.Router();

router.post(
  '/create-category',
  validateRequest(categoryValidations.categoryValidationSchema),
  categoryControllers.createCategory,
);

router.get('/', categoryControllers.getAllCategories);

router.get('/:id', categoryControllers.getSingleCategory);

router.delete('/:id', categoryControllers.deleteCategory);

router.patch(
  '/:id',
  validateRequest(categoryValidations.categoryValidationSchema),
  categoryControllers.updateCategory,
);

export const categoryRouts = router;

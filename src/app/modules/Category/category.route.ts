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

export const categoryRouts = router;

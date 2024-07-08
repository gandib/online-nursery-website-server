import { Router } from 'express';
import { productRouts } from '../modules/Product/product.route';
import { categoryRouts } from '../modules/Category/category.route';

const router = Router();
const modulesRoutes = [
  {
    path: '/products',
    route: productRouts,
  },
  {
    path: '/categories',
    route: categoryRouts,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

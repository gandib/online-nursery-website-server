import { Router } from 'express';
import { productRouts } from '../modules/Product/product.route';
import { categoryRouts } from '../modules/Category/category.route';
import { orderWithDetailRoutes } from '../modules/OrderWithCustomerDetails/orderWithDetail.route';

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
  {
    path: '/orders',
    route: orderWithDetailRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

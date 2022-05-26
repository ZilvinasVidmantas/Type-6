import { Router } from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} from '../controllers/products-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import adminMiddleware from '../middlewares/admin-middleware.js';
import imgUploadMiddleware from '../middlewares/img-upload-middleware.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post(
  '/',
  authMiddleware,
  adminMiddleware,
  imgUploadMiddleware.array('images'),
  createProduct
);
router.put(
  '/:id',
  authMiddleware,
  adminMiddleware,
  imgUploadMiddleware.array('images'),
  updateProduct
);


export default router;
import { Router } from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products-controller';
import { authMiddleware } from '../middlewares/auth-middlewares';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', authMiddleware, createProduct);
productsRouter.patch('/:id', authMiddleware, updateProduct);
productsRouter.delete('/:id', authMiddleware, deleteProduct);

export default productsRouter;

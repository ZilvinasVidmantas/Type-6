import { Router } from 'express';
import {
  getProducts,
  deleteProduct,
  createProduct,
} from '../controllers/products-controller';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', createProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;

import { Router } from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
} from '../controllers/products-controller';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);
productsRouter.post('/', createProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;

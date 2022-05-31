import { Router } from 'express';
import { getProducts, deleteProduct } from '../controllers/products-controller';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;

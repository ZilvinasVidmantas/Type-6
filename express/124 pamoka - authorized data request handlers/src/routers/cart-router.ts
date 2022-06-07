import { Router } from 'express';
import {
  addItem,
  deleteItem,
  getCart,
  updateItem,
} from '../controllers/cart-controller';

const cartRouter = Router();

cartRouter.get('/', getCart);
cartRouter.post('/add-item', addItem);
cartRouter.patch('/update-item', updateItem);
cartRouter.delete('/delete-item', deleteItem);

export default cartRouter;

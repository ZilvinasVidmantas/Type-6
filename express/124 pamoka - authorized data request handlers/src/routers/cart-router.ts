import { Router } from 'express';
import {
  addItem,
  deleteItem,
  getCart,
  updateItem,
} from '../controllers/cart-controller';
import { authMiddleware, userMiddleware } from '../middlewares/auth-middlewares';

const cartRouter = Router();

cartRouter.use(authMiddleware, userMiddleware);
// cartRouter.use(userMiddleware);

cartRouter.get('/', getCart);
cartRouter.post('/add-item', addItem);
cartRouter.patch('/update-item', updateItem);
cartRouter.delete('/delete-item', deleteItem);

export default cartRouter;

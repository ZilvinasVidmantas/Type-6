import { Router } from 'express';
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
} from '../controllers/categories-controller';

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.get('/:id', getCategory);
categoriesRouter.post('/', createCategory);
categoriesRouter.patch('/:id', updateCategory);

export default categoriesRouter;

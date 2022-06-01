import { Router } from 'express';
import {
  getCategories,
  getCategory,
  createCategory,
} from '../controllers/categories-controller';

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.get('/:id', getCategory);
categoriesRouter.post('/', createCategory);

export default categoriesRouter;

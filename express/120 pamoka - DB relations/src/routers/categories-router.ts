import { Router } from 'express';
import { createCategory, getCategories } from '../controllers/categories-controller';

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.post('/', createCategory);

export default categoriesRouter;

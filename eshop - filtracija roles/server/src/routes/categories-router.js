import { Router } from 'express';
import {
  getCategories,
  getCategory,
  updateCategory,
  updateCategoryProperties,
} from '../controllers/categories-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import adminMiddleware from '../middlewares/admin-middleware.js';

const router = Router();

router.get('/', getCategories);
router.get('/:categoryId', getCategory);
router.patch('/:categoryId', authMiddleware, adminMiddleware, updateCategory);
router.patch('/:categoryId/properties', authMiddleware, adminMiddleware, updateCategoryProperties);

export default router;
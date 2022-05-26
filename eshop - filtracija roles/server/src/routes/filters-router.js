import { Router } from 'express';
import { getFilters } from '../controllers/filters-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import adminMiddleware from '../middlewares/admin-middleware.js';

const router = Router();

router.get('/', getFilters);

export default router;
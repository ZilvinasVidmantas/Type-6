import { Router } from 'express';
import { getUsers } from '../controllers/users-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import adminMiddleware from '../middlewares/admin-middleware.js';

const router = Router();

router.get('/', authMiddleware, adminMiddleware, getUsers);

export default router;
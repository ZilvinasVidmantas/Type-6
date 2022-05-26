import { Router } from 'express';
import {
  getCollections,
  getCollection,
  createCollectionItem,
  updateCollectionItem,
  deleteCollectionItem,
} from '../controllers/collections-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import adminMiddleware from '../middlewares/admin-middleware.js';

const router = Router();

router.use(authMiddleware, adminMiddleware);

router.get('/', getCollections);

router.get('/:collectionId', getCollection);

router.post('/:collectionId', createCollectionItem);

router.patch('/:collectionId/:itemId', updateCollectionItem);

router.delete('/:collectionId/:itemId', deleteCollectionItem);

export default router;
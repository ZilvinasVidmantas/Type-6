import { CategoryDocument } from '../models/category-model';

export type CategoryViewModel = {
  id: string,
  title: string,
  updatedAt: string,
};

const createCategoryViewModel = (categoryDoc: CategoryDocument): CategoryViewModel => ({
  id: categoryDoc._id.toString(),
  title: categoryDoc.title,
  updatedAt: categoryDoc.updatedAt,
});

export default createCategoryViewModel;

import { ProductDocument } from '../models/product-model';

export type ProductViewModel = {
  id: string,
  title: string,
  price: number,
  createdAt: string,
  updatedAt: string,
  categoryIds: string[],
};

const createProductViewModel = (productDoc: ProductDocument): ProductViewModel => ({
  id: productDoc._id.toString(),
  title: productDoc.title,
  price: productDoc.price,
  createdAt: productDoc.createdAt,
  updatedAt: productDoc.updatedAt,
  categoryIds: productDoc.categories.map((categoryId) => categoryId.toString()),
});

export default createProductViewModel;

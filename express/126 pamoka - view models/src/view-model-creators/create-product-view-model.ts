import { ProductDocument } from '../models/product-model';
import createCategoryViewModel, { CategoryViewModel } from './create-category-view-model';
import CategoryModel from '../models/category-model';

type ProductViewModelCommonProps = {
  id: string,
  title: string,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type ProductViewModel = ProductViewModelCommonProps & {
  categoryIds: string[],
};

export type ProductJoinedViewModel = ProductViewModelCommonProps & {
  categories: CategoryViewModel[],
};

const createProductViewModel = async (
  productDoc: ProductDocument,
  shouldPopulateCategories: boolean,
): Promise<ProductViewModel | ProductJoinedViewModel> => {
  // Bendrų savybių aprašymas
  const commonProps: ProductViewModelCommonProps = {
    id: productDoc._id.toString(),
    title: productDoc.title,
    price: productDoc.price,
    createdAt: productDoc.createdAt,
    updatedAt: productDoc.updatedAt,
  };

  if (shouldPopulateCategories) {
    // ProductJoinedViewModel kūrimas
    const productCategoryDocs = await CategoryModel.find({
      _id: { $in: productDoc.categories },
    });
    const productCategories = productCategoryDocs.map(
      (productCategoryDoc) => createCategoryViewModel(productCategoryDoc),
    );
    return {
      ...commonProps,
      categories: productCategories,
    };
  }

  // ProductViewModel kūrimas
  return {
    ...commonProps,
    categoryIds: productDoc.categories.map((categoryId) => categoryId.toString()),
  };
};

export default createProductViewModel;

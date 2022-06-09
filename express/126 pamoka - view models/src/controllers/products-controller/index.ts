import { RequestHandler } from 'express';
import { Error } from 'mongoose';
import { formatProductValidationError } from './products-error-formatters';
import CategoryModel, { CategoryDocument } from '../../models/category-model';
import ProductModel, { ProductPopulatedDocument, ProductDocument } from '../../models/product-model';
import createProductViewModel, { ProductViewModel } from '../../view-model-creators/create-product-view-model';
import createProductPopulatedViewModel, { ProductPopulatedViewModel } from '../../view-model-creators/create-product-populated-view-model';

const validateCategoriesIds = async (categoriesIds?: string[]) => {
  if (categoriesIds !== undefined && categoriesIds.length > 0) {
    const uniqCategoryIds = [...new Set(categoriesIds)];
    const foundCategories = await CategoryModel.find({
      _id: { $in: uniqCategoryIds },
    });

    if (uniqCategoryIds.length !== foundCategories.length) {
      throw new Error('Dalis kategorijų neegzistuoja');
    }

    return uniqCategoryIds;
  }
  return [];
};

export const getProducts: RequestHandler<
  unknown,
  { products: ProductViewModel[] | ProductPopulatedViewModel[] },
  unknown,
  { populate?: string }
> = async (req, res) => {
  const { populate } = req.query;
  const shouldPopulateCategories = populate === 'categories';

  let products: ProductViewModel[] | ProductPopulatedViewModel[];
  if (shouldPopulateCategories) {
    const productPopulatedDocs = await ProductModel
      .find()
      .populate<{ categories: CategoryDocument[] }>('categories');
    products = productPopulatedDocs.map(createProductPopulatedViewModel);
  } else {
    const productDocs = await ProductModel.find();
    products = productDocs.map(createProductViewModel);
  }

  res.status(200).json({ products });
};

export const getProduct: RequestHandler<
  { id: string },
  { product: ProductViewModel | ProductPopulatedViewModel } | ErrorResponseBody,
  unknown,
  { populate?: string }
> = async (req, res) => {
  const { id } = req.params;
  const { populate } = req.query;
  const shouldPopulateCategories = populate === 'categories';

  try {
    const productDoc = shouldPopulateCategories
      ? await ProductModel.findById(id).populate<{ categories: CategoryDocument[] }>('categories')
      : await ProductModel.findById(id);

    if (productDoc === null) {
      throw new Error(`Produktas su id '${id}' nerastas`);
    }
    const product = shouldPopulateCategories
      ? createProductPopulatedViewModel(productDoc as ProductPopulatedDocument)
      : createProductViewModel(productDoc as ProductDocument);

    res.status(200).json({ product });
  } catch (error) {
    res.status(404).json({
      error: `Produktas su id '${id}' nerastas`,
    });
  }
};

export const createProduct: RequestHandler = async (req, res) => {
  const productProps = req.body;
  try {
    const uniqCategoriesIds = await validateCategoriesIds(productProps.categories);
    productProps.categories = uniqCategoriesIds;
    const createdProduct = await ProductModel.create(productProps);
    res.status(201).json(createdProduct);
  } catch (err) {
    const error = err instanceof Error.ValidationError
      ? formatProductValidationError(err)
      : 'Serverio klada';
    res.status(400).json({ error });
  }
};

export const updateProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const productProps = req.body;

  try {
    const uniqCategoriesIds = await validateCategoriesIds(productProps.categories);
    productProps.categories = uniqCategoriesIds;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, productProps, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({
      error: error instanceof Error ? error.message : 'Blogi produkto duomenys',
    });
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (deletedProduct === null) throw new Error(`Produktas su id '${id}' nerastas`);
    res.status(200).json({
      product: deletedProduct,
    });
  } catch (error) {
    res.status(404).json({
      error: error instanceof Error ? error.message : error,
    });
  }
};

import { RequestHandler } from 'express';
import { Error, QueryWithHelpers } from 'mongoose';
import ProductModel from '../../models/product-model';
import CategoryModel from '../../models/category-model';
import { formatProductValidationError } from './products-error-formatters';

type ProductModelQuery = QueryWithHelpers<any, unknown, unknown, unknown>;
type SearchParam = string | undefined;

const validateCategoriesIds = async (categoriesIds: string[]) => {
  if (categoriesIds.length > 0) {
    const uniqCategoryIds = [...new Set(categoriesIds)];
    const foundCategories = await CategoryModel.find({
      // Ar yra tokių kategorių, kurių id yra viena iš <uniqCategoryIds> masyve esančių reikšmių?
      _id: { $in: uniqCategoryIds },
    });

    if (uniqCategoryIds.length !== foundCategories.length) {
      throw new Error('Dalis kategorijų neegzistuoja');
    }

    return uniqCategoryIds;
  }
  return [];
};

const getProductsModelData = async (populate: SearchParam, query: ProductModelQuery) => (
  populate === 'categories'
    ? query.populate('categories')
    : query);

type GetProducts = RequestHandler<unknown, unknown, unknown, { populate: SearchParam }>;
export const getProducts: GetProducts = async (req, res) => {
  const { populate } = req.query;

  const products = await getProductsModelData(populate, ProductModel.find());

  res.status(200).json(products);
};

type GetProduct = RequestHandler<{ id: number }, unknown, unknown, { populate: SearchParam }>;
export const getProduct: GetProduct = async (req, res) => {
  const { id } = req.params;
  const { populate } = req.query;

  try {
    const product = await getProductsModelData(populate, ProductModel.findById(id));
    res.status(200).json(product);
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

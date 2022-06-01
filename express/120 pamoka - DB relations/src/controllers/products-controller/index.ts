import { RequestHandler } from 'express';
import { Error } from 'mongoose';
import ProductModel from "../../models/product-model";
import { formatProductValidationError } from './products-error-formatters';

export const getProducts: RequestHandler = async (req, res) => {
  const products = await ProductModel.find();

  res.status(200).json(products);
};

export const getProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
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
    const createdProduct = await ProductModel.create(productProps);
    res.status(201).json(createdProduct);
  } catch (err) {
    const error = err instanceof Error.ValidationError
      ? formatProductValidationError(err)
      : 'Serverio klada';
    res.status(400).json({ error });
  }
}

export const updateProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const productProps = req.body;

  try {
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
      product: deletedProduct
    });

  } catch (error) {
    res.status(404).json({
      error: error instanceof Error ? error.message : error,
    });
  }
}

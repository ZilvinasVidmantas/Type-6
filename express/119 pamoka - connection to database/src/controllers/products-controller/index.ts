import { RequestHandler } from 'express';
import { Error } from 'mongoose';
import ProductModel from "../../models/product-model";
import { formatProductValidationError } from './products-error-formatters';

const products = [
  { id: 'asdasdas', title: 'Milk', price: 0.89, amount: 2 },
  { id: 'sdfsdfff', title: 'Bread', price: 1.19, amount: 1 },
];

export const getProducts: RequestHandler = async (req, res) => {
  const products = await ProductModel.find();

  res.status(200).json(products);
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

export const deleteProduct: RequestHandler = (req, res) => {
  const { id } = req.params;

  const index = products.findIndex(x => x.id === id);

  if (index >= 0) {
    products.splice(index, 1);
    res.status(200).json({
      msg: `Produktas sėkmingai ištrintas: ${id}`,
    });
  } else {
    res.status(404).json({
      msg: `Produktas su id '${id}' nerastas`,
    });
  }
}

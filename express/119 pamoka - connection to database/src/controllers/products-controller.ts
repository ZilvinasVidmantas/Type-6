import { RequestHandler } from "express";
import ProductModel from "../models/product-model";

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
  const createdProduct = await ProductModel.create(productProps);

  res.status(200).json(createdProduct);
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

import { RequestHandler } from 'express';
import { Error } from 'mongoose';
import ProductModel from "../models/product-model";


type ErrorMessagesLT = {
  price: string,
  amount: string,
  title: string,
}

const productValidationErrorMessagesLT: ErrorMessagesLT = {
  price: 'Trūksta produkto kainos',
  amount: 'Trūksta produkto kiekio',
  title: 'Trūksta produkto pavadinimo',
};

const isErrorMessageLT = (property: string): property is keyof ErrorMessagesLT => {
  return property in productValidationErrorMessagesLT;
}

const formatProductValidationError = (validationError: Error.ValidationError) => {
  const errorArray = Object.entries(validationError.errors);
  for (let i = 0; i < errorArray.length; i++) {
    const [property] = errorArray[i];
    if (isErrorMessageLT(property)) {
      return productValidationErrorMessagesLT[property];
    }
  }

  return 'Trūksta duomenų';
}

// Sukurkite funkcija 'formatProductValidationError', kuri suformuotų klaidą lietuviškai
// ir panaudokite ją produkto kūrimo (klaidos) metu funkcijoje 'createProduct'

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

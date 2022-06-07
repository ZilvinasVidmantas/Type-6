import { RequestHandler } from 'express';
// import ProductModel from '../models/product-model';
// import UserModel from '../models/user-model';

export const getCart: RequestHandler = async (req, res) => {
  res.status(200).send('getCart');
};

export const addItem: RequestHandler = async (req, res) => {
  res.status(200).send('addItem');
};

export const updateItem: RequestHandler = async (req, res) => {
  res.status(200).send('updateItem');
};

export const deleteItem: RequestHandler = async (req, res) => {
  res.status(200).send('deleteItem');
};

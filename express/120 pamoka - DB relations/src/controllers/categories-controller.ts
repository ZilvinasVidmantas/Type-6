import { RequestHandler } from 'express';
import CategoryModel from '../models/category-model';

export const getCategories: RequestHandler = async (req, res) => {
  const categories = await CategoryModel.find();

  res.status(200).json(categories);
}
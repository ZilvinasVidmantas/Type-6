import { RequestHandler } from 'express';
import CategoryModel from '../models/category-model';

export const getCategories: RequestHandler = async (req, res) => {
  const categories = await CategoryModel.find();

  res.status(200).json(categories);
}

export const getCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({
      msg: `Kategorija su id '${id}' nerasta`,
    });
  }
};

export const createCategory: RequestHandler = async (req, res) => {
  const categoryProps = req.body;
  try {
    const createdCategory = await CategoryModel.create(categoryProps);
    res.status(201).json(createdCategory);
  } catch (err) {
    res.status(400).json({ error: 'Serverio klaida kuriant kategoriją' });
  }
}



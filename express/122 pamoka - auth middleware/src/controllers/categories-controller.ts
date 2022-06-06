import { RequestHandler } from 'express';
import CategoryModel from '../models/category-model';

export const getCategories: RequestHandler = async (req, res) => {
  const categories = await CategoryModel.find();

  res.status(200).json(categories);
};

export const getCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({
      error: `Kategorija su id '${id}' nerasta`,
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
};

export const updateCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const categoryProps = req.body;

  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(id, categoryProps, { new: true });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({
      error: 'Serverio klaida atnaujinant kategoriją',
    });
  }
};

export const deleteCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(id);
    if (deletedCategory === null) throw new Error(`Produktas su id '${id}' nerastas`);
    res.status(200).json({
      product: deletedCategory,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Serverio klaida trinant kategoriją',
    });
  }
};

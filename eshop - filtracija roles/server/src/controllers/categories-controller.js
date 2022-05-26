import database from '../database/index.js';
import { v4 as createId } from 'uuid';

export const getCategories = (req, res) => {
  const { categories } = JSON.parse(JSON.stringify(database.data));

  res.status(200).json(categories);
}

export const getCategory = (req, res) => {
  const { categoryId } = req.params;
  const { categories } = JSON.parse(JSON.stringify(database.data));

  const category = categories.find(x => x.id === categoryId);

  res.status(200).json(category);
}

export const updateCategory = (req, res) => {
  const { categoryId } = req.params;
  const categoryIndex = database.data.categories.findIndex(x => x.id === categoryId);
  if (categoryIndex === -1) {
    res.status(404).json({ message: `Category with id '${categoryId}' was not found.` });
    return;
  }

  database.data.categories[categoryIndex] = { ...database.data.categories[categoryIndex], ...req.body };

  database.write();

  res.status(200).json(database.data.categories[categoryIndex]);
}

export const updateCategoryProperties = (req, res) => {
  const { categoryId } = req.params;
  const { categories } = database.data;
  const category = categories.find(x => x.id === categoryId);
  let newProperties = req.body;

  newProperties = newProperties.map(property => {
    if (property.type !== 'range' && !database.data[property.collection]) {
      const newCollection = {
        id: createId(),
        title: property.collection
      };
      database.data[property.collection] = [];
      database.data.collections.push(newCollection);
    }
    return property;
  });

  category.properties = newProperties;

  database.write();

  res.status(200).json(category);
}

import database from '../database/index.js';
import { v4 as createId } from 'uuid';

export const getCollections = (req, res) => {
  const DB = JSON.parse(JSON.stringify(database.data));
  const collections = DB.collections.map(collection => ({
    ...collection,
    data: database.data[collection.title],
  }));
  res.status(200).json(collections);
}

export const getCollection = (req, res) => {
  const DB = JSON.parse(JSON.stringify(database.data));

  const { collectionId } = req.params
  const collectionRef = DB.collections.find(x => x.id === collectionId);
  const collectionTitle = collectionRef.title;
  const collection = {
    id: collectionId,
    title: collectionTitle,
    data: database.data[collectionTitle],
  };

  res.status(200).json(collection);
}

export const createCollectionItem = (req, res) => {
  const { collectionId } = req.params;
  const { title } = req.body;

  const collectionRef = database.data.collections.find(x => x.id === collectionId);
  const collection = database.data[collectionRef.title];

  const itemExists = collection.find(x => x.title === title);
  if (itemExists) {
    res.status(422).json({ message: `item with title '${title}' already exists` });
    return;
  }

  const newItem = {
    id: createId(),
    title,
  };
  collection.push(newItem);
  database.write();

  res.status(201).json(newItem);
}

export const deleteCollectionItem = (req, res) => {
  const { collectionId, itemId } = req.params;

  const collectionRef = database.data.collections.find(x => x.id === collectionId);
  const collection = database.data[collectionRef.title];

  const collectionName = collectionRef.title;
  const propsDependentOnCollection = [... new Set(database.data.categories
    .map(x => x.properties)
    .filter(x => x.collection === collectionName)
    .map(x => x.name))];

  let dependentProductIds = [];

  propsDependentOnCollection.forEach(prop => {
    const productIdsDependentOnProp = database.data.products
      .filter(x => x[prop] === itemId)
      .map(x => x.id);
    dependentProductIds = [...dependentProductIds, ...productIdsDependentOnProp];
  })

  dependentProductIds = [... new Set(dependentProductIds)];

  if (dependentProductIds.length > 0) {
    const productIdsString = dependentProductIds.length > 5
      ? dependentProductIds.slice(0, 5).map(x => `'${x}'`).join(', ')
      : dependentProductIds.map(x => `'${x}'`).join(', ');

    res.status(424).json({
      message: `Collection has product relations. Products id's: ${productIdsString}`
    });

    return;
  }

  database.data[collectionRef.title] = collection.filter(x => x.id !== itemId);
  database.write();

  res.status(200).send();
}

export const updateCollectionItem = (req, res) => {
  const { collectionId, itemId } = req.params;
  const { title } = req.body;

  const collectionRef = database.data.collections.find(x => x.id === collectionId);
  const collection = database.data[collectionRef.title];

  const itemExists = collection.find(x => x.title === title);
  if (itemExists) {
    res.status(422).json({ message: `item with title '${title}' already exists` });
    return;
  }

  const itemToUpdate = collection.find(x => x.id === itemId);
  itemToUpdate.title = title;
  database.write();

  res.status(200).json(itemToUpdate);
}
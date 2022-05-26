import database from '../database/index.js';
import { v4 as createId } from 'uuid';

const filterByRange = (products, filter, queryParams) => {
  const min = Number(queryParams[`${filter.name}_min`]);
  const max = Number(queryParams[`${filter.name}_max`]);

  if (min) {
    products = products.filter(x => x[filter.name] >= min);
  }
  if (max) {
    products = products.filter(x => x[filter.name] <= max);
  }

  return products;
};

const filterByOptionsOrAutocomplete = (products, filter, queryParams) => {
  const options = [].concat(queryParams[filter.name]).filter(x => x !== undefined);
  if (options.length > 0) {
    products = products.filter(x => options.includes(x[filter.name]));
  }
  return products;
};

const filterFuctionMap = {
  range: filterByRange,
  options: filterByOptionsOrAutocomplete,
  autocomplete: filterByOptionsOrAutocomplete,
};

const mapWithFilterCollection = (products, filter, collections) => {
  const collection = collections[filter.collection];
  products = products.map(product => ({
    ...product,
    [filter.name]: collection.find(x => x.id === product[filter.name]).title,
  }));
  return products
}

export const getProducts = (req, res) => {
  const DB = JSON.parse(JSON.stringify(database.data));

  const { products, categories } = DB;
  const {
    category: categoryId,
    limit,
    page,
    ...queryParams
  } = req.query;

  let selectedProducts = products
    .filter(x => x.category === categoryId)
    .map(({ category, ...product }) => product);

  const category = categories.find(x => x.id === categoryId);

  category.properties.forEach(property => {
    selectedProducts = filterFuctionMap[property.type](selectedProducts, property, queryParams);
    if (property.collection) {
      selectedProducts = mapWithFilterCollection(selectedProducts, property, DB);
    }
  });

  const paginatedResponse = {
    total: selectedProducts.length,
    products: selectedProducts.slice((page - 1) * limit, page * limit),
  }

  res.status(200).json(paginatedResponse);
}

export const createProduct = (req, res) => {
  const images = req.files;
  const data = req.body;
  const { IMG_PATH, SERVER_DOMAIN, SERVER_PORT } = process.env;

  const product = {
    id: createId(),
    images: images.map(x => `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_PATH}/${x.filename}`),
    ...data
  };
  database.data.products.push(product);

  database.write();

  res.status(200).json(product);
}

export const getProduct = (req, res) => {
  const { id } = req.params;

  const DB = JSON.parse(JSON.stringify(database.data));
  const product = DB.products.find(x => x.id === id);

  res.status(200).json(product);
}

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const images = req.files;
  const { oldImages, ...data } = req.body;

  const { IMG_PATH, SERVER_DOMAIN, SERVER_PORT } = process.env;

  let newImages = images.map(x => `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_PATH}/${x.filename}`);
  if (oldImages) {
    if (oldImages instanceof Array) {
      newImages = [...oldImages, ...newImages]
    } else {
      newImages = [oldImages, ...newImages]
    }
  }

  const updatedProduct = {
    id,
    images: newImages,
    ...data
  };

  const productIndex = database.data.products.findIndex(x => x.id === id);
  database.data.products.splice(productIndex, 1, updatedProduct);
  database.write();

  res.status(200).json(updatedProduct);
}

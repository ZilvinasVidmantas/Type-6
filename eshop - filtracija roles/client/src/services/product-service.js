import axios from 'axios';
import store from '../store/index';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchProducts = async (searchParams) => {
  try {
    const { data } = await requester.get(`/products?${searchParams.toString()}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchProduct = async (id) => {
  try {
    const { data } = await requester.get(`/products/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchCategories = async () => {
  try {
    const { data } = await requester.get('/categories');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchFilters = async (categoryId) => {
  let queryParams = '';
  if (categoryId) {
    queryParams = `?category=${categoryId}`;
  }

  try {
    const { data } = await requester.get(`/filters${queryParams}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createProduct = async (formData) => {
  try {
    const { token } = store.getState().auth;
    const { data } = await requester.post('/products', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateProduct = async (id, formData) => {
  try {
    const { token } = store.getState().auth;
    const { data } = await requester.put(`/products/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ProductService = {
  fetchProducts,
  fetchCategories,
  fetchFilters,
  createProduct,
  fetchProduct,
  updateProduct,
};

export default ProductService;

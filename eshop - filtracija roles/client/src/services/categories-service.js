import axios from 'axios';
import store from '../store/index';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/categories',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getCategories = async () => {
  const { token } = store.getState().auth;
  const { data } = await requester.get('/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const getCategory = async (id) => {
  const { token } = store.getState().auth;
  const { data } = await requester.get(`/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const updateCategory = async (id, updateData) => {
  const { token } = store.getState().auth;
  const { data } = await requester.patch(`/${id}`, updateData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const updateCategoryProperties = async (id, properties) => {
  const { token } = store.getState().auth;
  const { data } = await requester.patch(`/${id}/properties`, properties, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

const CategoriesService = {
  getCategories,
  getCategory,
  updateCategory,
  updateCategoryProperties,
};

export default CategoriesService;

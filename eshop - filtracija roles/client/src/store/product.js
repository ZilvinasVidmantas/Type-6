/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../services/product-service';

const initialState = {
  product: null,
};

export const fetchProduct = createAsyncThunk(
  'product/fetch',
  async (id) => {
    const product = await ProductService.fetchProduct(id);

    return { product };
  },
);

export const createProduct = createAsyncThunk(
  'product/create',
  async (formData) => {
    const product = await ProductService.createProduct(formData);

    return { product };
  },
);
export const updateProduct = createAsyncThunk(
  'product/update',
  async ({ id, formData }) => {
    const product = await ProductService.updateProduct(id, formData);

    return { product };
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    deleteError: (state) => {
      state.error = undefined;
    },
    resetProduct: (state) => {
      state.product = null;
    },
  },
  extraReducers: {
    [fetchProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      state.product = product;
    },

    [createProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      state.product = product;
    },

    [updateProduct.fulfilled]: (state, { payload }) => {
      const { product } = payload;
      state.product = product;
    },
  },
});

export const { deleteError, resetProduct } = productSlice.actions;

export const productSelector = (state) => state.product.product;

export default productSlice.reducer;

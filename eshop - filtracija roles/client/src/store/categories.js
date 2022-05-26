/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CategoriesService from '../services/categories-service';
import { collectionTitlesSelector, fetchCollections } from './collections';

const initialState = {
  isFetched: false,
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { getState }) => {
    const { categories: { isFetched, categories } } = getState();
    if (!isFetched) {
      const fetchedCategories = await CategoriesService.getCategories();
      return { categories: fetchedCategories };
    }
    return { categories };
  },
);

export const fetchCategory = createAsyncThunk(
  'categories/fetchCategory',
  async (id, { getState }) => {
    const { categories: { categories } } = getState();
    const category = categories.find((x) => x.id === id);
    if (category) {
      throw new Error('category already fetched');
    }
    const fetchedCategory = await CategoriesService.getCategory(id);
    return { category: fetchedCategory };
  },
);

export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ id, data }) => {
    const updatedCategory = await CategoriesService.updateCategory(id, data);
    return { updatedCategory };
  },
);

export const updateCategoryProperties = createAsyncThunk(
  'categories/updateCategoryProperties',
  async ({ id, properties }, { getState, dispatch }) => {
    const updatedCategory = await CategoriesService.updateCategoryProperties(id, properties);

    const collectionsTitles = collectionTitlesSelector(getState());
    const updatedCategoryCollectionTitles = updatedCategory.properties
      .filter((x) => x.collection)
      .map((x) => x.collection);

    const newCollectionsHasBeenCreated = updatedCategoryCollectionTitles
      .some((categoryCollection) => !collectionsTitles.includes(categoryCollection));

    if (newCollectionsHasBeenCreated) {
      dispatch(fetchCollections(true));
    }

    return { updatedCategory };
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    deleteError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload.categories;
      state.isFetched = true;
    },

    [fetchCategory.fulfilled]: (state, { payload }) => {
      const { category } = payload;
      state.categories.push(category);
    },

    [updateCategory.fulfilled]: (state, { payload }) => {
      const { updatedCategory } = payload;
      state.categories = state.categories.map((x) => (
        x.id === updatedCategory.id
          ? updatedCategory
          : x
      ));
    },

    [updateCategoryProperties.fulfilled]: (state, { payload }) => {
      const { updatedCategory } = payload;
      state.categories = state.categories.map((x) => (
        x.id === updatedCategory.id
          ? updatedCategory
          : x
      ));
    },
  },
});

export const { deleteError } = categoriesSlice.actions;

export const categoriesSelector = (state) => state.categories.categories;
export const categorySelector = (id) => (state) => state.categories.categories
  .find((x) => x.id === id);

export default categoriesSlice.reducer;

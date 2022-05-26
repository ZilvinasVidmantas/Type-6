/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CollectionService from '../services/collections-service';

const initialState = {
  isFetched: false,
  collections: [],
};

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (forceFetch, { getState }) => {
    const { collections: { isFetched, collections } } = getState();
    if (!isFetched || forceFetch) {
      const fetchedCollections = await CollectionService.getCollections();
      return { collections: fetchedCollections };
    }
    return { collections };
  },
);

export const fetchCollection = createAsyncThunk(
  'collections/fetchCollection',
  async (id, { getState }) => {
    const { collections: { collections } } = getState();
    const existingCollection = collections.find((x) => x.id === id);
    if (existingCollection) throw new Error('collection already fetched');
    const fetchedCollection = await CollectionService.getCollection(id);
    return { collection: fetchedCollection };
  },
);

export const createCollectionItem = createAsyncThunk(
  'collections/createCollectionItem',
  async ({ collectionId, title }) => {
    const newItem = await CollectionService.createCollectionItem({
      collectionId,
      title,
    });

    return { newItem, collectionId };
  },
);

export const updateCollectionItem = createAsyncThunk(
  'collections/updateCollectionItem',
  async ({ collectionId, title, itemId }) => {
    const updatedItem = await CollectionService.updateCollectionItem({
      collectionId,
      title,
      itemId,
    });

    return { updatedItem, collectionId };
  },
);

export const deleteCollectionItem = createAsyncThunk(
  'collections/deleteCollectionItem',
  async ({ collectionId, itemId }) => {
    await CollectionService.deleteCollectionItem({ collectionId, itemId });

    return { collectionId, itemId };
  },
);

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    deleteError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    [fetchCollections.fulfilled]: (state, { payload }) => {
      state.collections = payload.collections;
      state.isFetched = true;
    },

    [fetchCollection.fulfilled]: (state, { payload }) => {
      state.collections.push(payload.collection);
    },

    [createCollectionItem.fulfilled]: (state, { payload }) => {
      const { newItem, collectionId } = payload;
      const collection = state.collections.find((x) => x.id === collectionId);
      collection.data.push(newItem);
    },
    [createCollectionItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },

    [updateCollectionItem.fulfilled]: (state, { payload }) => {
      const { updatedItem, collectionId } = payload;
      const collection = state.collections.find((x) => x.id === collectionId);
      collection.data = collection.data
        .map((x) => (x.id === updatedItem.id ? updatedItem : x));
    },
    [updateCollectionItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },

    [deleteCollectionItem.fulfilled]: (state, { payload }) => {
      const { itemId, collectionId } = payload;
      const collection = state.collections.find((x) => x.id === collectionId);
      collection.data = collection.data.filter((x) => x.id !== itemId);
    },
    [deleteCollectionItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

export const { deleteError } = collectionsSlice.actions;

export const collectionErrorSelector = (state) => state.collections.error;
export const collectionsSelector = (state) => state.collections.collections;
export const collectionSelector = (id) => (state) => state.collections
  .collections.find((x) => x.id === id);
export const collectionTitlesSelector = (state) => state.collections.collections
  .map((x) => x.title);

export default collectionsSlice.reducer;

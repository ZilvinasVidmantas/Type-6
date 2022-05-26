import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import users from './users';
import collections from './collections';
import categories from './categories';
import product from './product';

const store = configureStore({
  reducer: {
    users,
    auth,
    collections,
    categories,
    product,
  },
});

export default store;

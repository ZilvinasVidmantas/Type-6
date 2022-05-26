import axios from 'axios';
import store from '../store/index';
import * as usersSlice from '../store/users';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getUsers = async () => {
  const { token } = store.getState().auth;
  const { data: users } = await requester.get('/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const action = usersSlice.loadUsers({ users });
  store.dispatch(action);
};

export default {
  getUsers,
};

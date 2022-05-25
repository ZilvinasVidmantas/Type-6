import axios from 'axios';
import { Item } from '../types';

const API_SERVER = process.env.REACT_APP_API_SERVER;

const fetchItems = async () => {
  const { data } = await axios.get<Item[]>(`${API_SERVER}/shopItems`);
  return data;
};

const ShopService = {
  fetchItems,
};

export default ShopService;

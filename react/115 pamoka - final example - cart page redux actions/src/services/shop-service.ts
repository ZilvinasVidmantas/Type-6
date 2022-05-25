import { Item } from '../types';
import ApiService from './api-service';

const fetchItems = async () => {
  const { data } = await ApiService.get<Item[]>('/shopItems');
  return data;
};

const ShopService = {
  fetchItems,
};

export default ShopService;

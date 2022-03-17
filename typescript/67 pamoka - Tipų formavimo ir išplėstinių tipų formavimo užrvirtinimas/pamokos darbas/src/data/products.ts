import Product from '../types/product.js';
import categories from './categories.js';

const products: Product[] = [
  {
    id: '1',
    title: 'PP MSI B450',
    description: 'Gera ploštė darbui',
    price: 75,
    type: categories[0],
  },
  {
    id: '2',
    title: 'XF Dinosour',
    description: 'Gera ploštė kankinimui',
    price: 5,
    type: categories[0],
  },
  {
    id: '3',
    title: 'CFF ABX3000',
    description: 'Gera ploštė žaidimams',
    price: 175,
    type: categories[0],
  },
  {
    id: '4',
    title: 'SandDisk DDR4 1033Hz',
    price: 50,
    type: categories[1],
  },
  {
    id: '5',
    title: 'Huawei DDR 1812Hz',
    price: 120,
    type: categories[1],
  },
];

export default products;

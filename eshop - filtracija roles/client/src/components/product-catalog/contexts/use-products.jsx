import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../services/product-service';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      if (searchParams.get('category')) {
        setTotal(0);
        const paginatedResult = await ProductService.fetchProducts(searchParams);
        setProducts(paginatedResult.products);
        setTotal(paginatedResult.total);
      }
    })();
  }, [searchParams]);

  return { products, total };
};

export default useProducts;

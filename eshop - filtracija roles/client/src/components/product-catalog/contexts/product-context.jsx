import React, { createContext, useMemo } from 'react';
import useCategories from './use-categories';
import useFilters from './use-filters';
import useProducts from './use-products';
import usePagination from './use-pagination';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const {
    categories,
    selectedCategory,
    categoryName,
    changeCategory,
  } = useCategories();
  const { filters, changeFilter } = useFilters(selectedCategory);
  const { limit, page, changePage } = usePagination(filters);
  const { products, total } = useProducts(selectedCategory);

  const contextValue = useMemo(() => ({
    categories,
    selectedCategory,
    categoryName,
    filters,
    products,
    total,
    limit,
    page,
    changeCategory,
    changeFilter,
    changePage,
  }), [categories, selectedCategory, categoryName, filters, products, total, limit, page]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

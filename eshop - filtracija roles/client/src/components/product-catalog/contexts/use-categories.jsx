import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import iconMap from '../../../data/icon-map';
import ProductService from '../../../services/product-service';

const useCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  const setCategoryFromUrl = () => {
    const categoryParam = searchParams.get('category');
    const foundCategory = categories.find((x) => x.id === categoryParam);
    const category = foundCategory ?? categories[0];
    if (!foundCategory) {
      const newSearchParams = searchParams;
      newSearchParams.set('category', category.id);
      setSearchParams(newSearchParams);
    }
    setSelectedCategory(category.id);
    setCategoryName(category.title);
  };

  const changeCategory = (id) => {
    const newSerachParams = new URLSearchParams({
      category: id,
      limit: searchParams.get('limit'),
      page: 1,
    });
    setSearchParams(newSerachParams);
    setSelectedCategory(id);
    setCategoryName(categories.find((x) => x.id === id).title);
  };

  useEffect(() => {
    (async () => {
      const categoryData = await ProductService.fetchCategories();
      const fetchedCategories = categoryData.map(({ icon, ...x }) => ({
        ...x,
        Icon: iconMap[icon],
      }));
      setCategories(fetchedCategories);
    })();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setCategoryFromUrl();
    }
  }, [categories]);

  return {
    categories,
    selectedCategory,
    categoryName,
    changeCategory,
  };
};

export default useCategories;

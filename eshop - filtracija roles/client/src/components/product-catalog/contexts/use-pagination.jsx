import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchParamsToObject } from '../helpers/search-params-helpers';

const usePagination = (filters) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [filtersChanged, setFiltersInitialized] = useState(false);

  const syncToUrlParams = ({ limitParam, pageParam }) => {
    const urlParams = searchParamsToObject(searchParams);
    urlParams.limit = limitParam ?? limit;
    urlParams.page = pageParam ?? page;
    setSearchParams(urlParams);
  };

  const changePage = (newPage) => {
    const urlParams = searchParamsToObject(searchParams);
    urlParams.page = [newPage];
    setSearchParams(urlParams);
    setPage(newPage);
  };

  useEffect(() => {
    const limitParam = searchParams.get('limit');
    if (limitParam) {
      setLimit(limitParam);
    }
    const pageParam = searchParams.get('page');
    if (pageParam) {
      setPage(pageParam);
    }

    syncToUrlParams({
      limitParam,
      pageParam,
    });
  }, []);

  useEffect(() => {
    if (filters.length > 0) {
      if (filtersChanged) {
        const urlParams = searchParamsToObject(searchParams);
        urlParams.page = [1];
        setSearchParams(urlParams);
        setPage(1);
      } else {
        setFiltersInitialized(true);
      }
    }
  }, [filters]);

  return { limit, page, changePage };
};

export default usePagination;

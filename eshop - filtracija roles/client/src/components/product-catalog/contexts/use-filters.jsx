import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../services/product-service';
import { searchParamsToObject } from '../helpers/search-params-helpers';

const useFilters = (selectedCategory) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState([]);

  const syncToUrlParams = (newFilters) => {
    const urlParams = searchParamsToObject(searchParams);
    newFilters.forEach((filter) => {
      switch (filter.type) {
        case 'autocomplete':
          urlParams[filter.name] = filter.options
            .filter((x) => x.selected)
            .map((x) => x.id);
          break;
        case 'range':
          if (filter.currMin > filter.min) {
            urlParams[`${filter.name}_min`] = filter.currMin;
          } else {
            delete urlParams[`${filter.name}_min`];
          }
          if (filter.currMax < filter.max) {
            urlParams[`${filter.name}_max`] = filter.currMax;
          } else {
            delete urlParams[`${filter.name}_max`];
          }
          break;
        case 'options':
          urlParams[filter.name] = filter.options
            .filter((x) => x.checked)
            .map((x) => x.id);
          break;
        default:
          break;
      }
    });
    setSearchParams(urlParams);
  };

  const changeAutocompleteFilter = (filter, { action, option }) => {
    const newFilter = { ...filter };

    switch (action) {
      case 'add':
        newFilter.options.find((x) => x.id === option.id)
          .selected = true;
        break;
      case 'remove':
        newFilter.options.find((x) => x.id === option.id)
          .selected = false;
        break;
      default: break;
    }

    return newFilter;
  };

  const changeRangeFilter = (filter, [min, max]) => ({
    ...filter,
    currMin: min,
    currMax: max,
  });

  const changeOptionsFilter = (filter, { id, checked }) => {
    const option = filter.options.find((x) => x.id === id);
    option.checked = checked;

    return filter;
  };

  const changeFilterMap = {
    autocomplete: changeAutocompleteFilter,
    range: changeRangeFilter,
    options: changeOptionsFilter,
  };

  const changeFilter = (name, type, props) => {
    const updatedFilters = filters.map((filter) => (
      filter.name === name
        ? changeFilterMap[type](filter, props)
        : filter));
    setFilters(updatedFilters);
    syncToUrlParams(updatedFilters);
  };

  const configureFilters = (filtersData) => filtersData.map((filter) => {
    const configuredFilter = { ...filter };
    switch (filter.type) {
      case 'autocomplete':
        configuredFilter.options = filter.options.map((x) => ({ ...x, selected: false }));
        break;
      case 'range':
        configuredFilter.currMin = configuredFilter.min;
        configuredFilter.currMax = configuredFilter.max;
        break;
      case 'options':
        configuredFilter.options = filter.options.map((x) => ({ ...x, checked: false }));
        break;
      default:
        break;
    }

    return configuredFilter;
  });

  const syncFromUrlParams = (configuredFilters) => {
    configuredFilters.forEach((filter) => {
      const filterRef = filter;
      const urlOptions = searchParams.getAll(filter.name);
      const minUrlOption = searchParams.get(`${filter.name}_min`);
      const maxUrlOption = searchParams.get(`${filter.name}_max`);

      if ([...urlOptions, minUrlOption, maxUrlOption].length > 0) {
        switch (filter.type) {
          case 'autocomplete':
            urlOptions.forEach((id) => {
              const option = filter.options.find((x) => x.id === id);
              if (option) {
                option.selected = true;
              }
            });
            break;
          case 'range':
            if (minUrlOption) {
              filterRef.currMin = Number(minUrlOption);
            }
            if (maxUrlOption) {
              filterRef.currMax = Number(maxUrlOption);
            }
            break;
          case 'options':
            urlOptions.forEach((id) => {
              const option = filter.options.find((x) => x.id === id);
              if (option) {
                option.checked = true;
              }
            });
            break;

          default:
            break;
        }
      }
    });

    return configuredFilters;
  };

  const getFiltersByCategory = async (categoryId) => {
    const filtersData = await ProductService.fetchFilters(categoryId);
    const configuredFilters = configureFilters(filtersData);

    const syncedFilters = syncFromUrlParams(configuredFilters);

    return syncedFilters;
  };

  useEffect(() => {
    if (selectedCategory) {
      (async () => {
        const configuredFilters = await getFiltersByCategory(selectedCategory);

        setFilters(configuredFilters);
      })();
    }
  }, [selectedCategory]);

  return { filters, changeFilter };
};

export default useFilters;

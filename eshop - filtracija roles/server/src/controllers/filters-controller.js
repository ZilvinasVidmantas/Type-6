import database from '../database/index.js';

export const getFilters = (req, res) => {
  if (!req.query.category) {
    res.status(400).json({ message: '\'category\' query param expected' });
    return;
  }

  const DB = JSON.parse(JSON.stringify(database.data));
  const category = DB.categories.find(x => x.id === req.query.category);

  if (!category) {
    res.status(400).json({ message: 'invalid \'category\' query param' });
    return;
  }

  const filters = category.properties
    .map((filters) => {
      switch (filters.type) {
        case 'autocomplete':
        case 'options':
          filters.options = DB[filters.collection].sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'range':
          let products = DB.products;
          if (category && category.id) products = products.filter(x => x.category === category.id);
          filters.min = 0;
          filters.max = 0;
          if (products.length > 0) {
            products.sort((a, b) => a[filters.name] - b[filters.name]);
            filters.min = Math.floor(products[0][filters.name]);
            filters.max = Math.ceil(products[products.length - 1][filters.name]);
          }
          break;
      }
      return filters;
    });

  res.status(200).json(filters);
}


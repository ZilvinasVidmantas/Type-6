import React, { useState, useRef, useContext } from 'react';
import {
  Typography,
  Paper,
  Divider,
  Box,
  Button,
  Menu,
  MenuItem,
  Pagination,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ProductContext } from '../contexts/product-context';

const sortOptions = [
  { id: '1', title: 'Title', order: 'asc' },
  { id: '2', title: 'Title', order: 'desc' },
  { id: '3', title: 'Price', order: 'asc' },
  { id: '4', title: 'Price', order: 'desc' },
];

const SortText = ({ title, order }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    {title}
    {order === 'asc' ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
  </Box>
);

const HomePageProductsHeader = () => {
  const sortButtonRef = useRef(null);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const {
    total,
    page,
    limit,
    categoryName,
    changePage,
  } = useContext(ProductContext);

  const openSortMenu = () => setSortMenuOpen(true);
  const closeSortMenu = () => setSortMenuOpen(false);

  const handleSortSelect = (id) => {
    const newOption = sortOptions.find((x) => x.id === id);
    // Rikiuojami relementai...
    setSortOption(newOption);
    closeSortMenu();
  };

  const handlePaginationChange = (_, pageClicked) => {
    changePage(pageClicked);
  };

  let rangeString = '';
  if (total > limit) {
    const from = (page - 1) * limit + 1;
    const to = Math.min(limit * page, total);
    rangeString = `${from}-${to}`;
  }
  const searchResultString = `${categoryName} ${rangeString} (total: ${total})`;

  return (
    <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">{searchResultString}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {total > limit && (
          <>
            <Pagination
              count={Math.ceil(total / limit)}
              page={Number(page)}
              variant="outlined"
              shape="rounded"
              onChange={handlePaginationChange}
              color="secondary"
            />
            <Divider orientation="vertical" sx={{ mx: 1 }} />
          </>
        )}
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          ref={sortButtonRef}
          onClick={openSortMenu}
          sx={{ width: 80, textTransform: 'capitalize' }}
        >
          <SortText title={sortOption.title} order={sortOption.order} />
        </Button>
        <Menu
          anchorEl={sortButtonRef.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={sortMenuOpen}
          onClose={closeSortMenu}
        >
          {sortOptions.map((x) => (
            <MenuItem key={x.id} onClick={() => handleSortSelect(x.id)}>
              <SortText title={x.title} order={x.order} />
            </MenuItem>
          ))}
        </Menu>

      </Box>
    </Paper>
  );
};

export default HomePageProductsHeader;

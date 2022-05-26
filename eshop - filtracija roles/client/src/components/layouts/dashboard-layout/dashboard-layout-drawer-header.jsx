import { Box, styled } from '@mui/material';

const DashboardLayoutDrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  height: theme.mixins.toolbar.minHeight,
}));

export default DashboardLayoutDrawerHeader;

import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Divider,
  useTheme,
} from '@mui/material';

import { selectAuth } from '../../../store/auth';
import ProfilePageImage from './profile-page-image';
import ProfilePageForm from './profile-page-form';

const ProfilePage = () => {
  const { user: { imgSrc, ...user } } = useSelector(selectAuth);
  const { breakpoints, mixins, spacing } = useTheme();

  const containerWidth = breakpoints.values.lg
    - mixins.drawer.width - Number(spacing(6).slice(0, -2));

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 3, sm: 5 },
      width: { lg: containerWidth },
    }}
    >
      <ProfilePageImage imgSrc={imgSrc} />
      <Box sx={{ flexGrow: 1 }}>
        <Divider sx={{ mb: 3 }} textAlign="left">Profilio informacija</Divider>
        <ProfilePageForm {...user} />
      </Box>
    </Box>
  );
};

export default ProfilePage;

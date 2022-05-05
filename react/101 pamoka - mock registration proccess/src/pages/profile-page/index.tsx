import React, { useContext } from 'react';
import { Typography, Container, Box } from '@mui/material';
import AuthContext from '../../features/auth/auth-context';
import Img from '../../components/img';

const ProfilePage: React.FC = () => {
  const { user } = useContext(AuthContext);

  const needsProfileUpdate = user && (!user.name || !user.surname || !user.img);

  return (
    <Container>
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: 'center' }}
      >
        {
          needsProfileUpdate
            ? 'Please fill your profile data'
            : `Hello, ${user?.name} ${user?.surname}`
        }

      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Img src={user?.img} />
      </Box>
    </Container>
  );
};

export default ProfilePage;

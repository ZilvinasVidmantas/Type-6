import React, { useContext } from 'react';
import { Typography, Container, Box } from '@mui/material';
import AuthContext from '../../features/auth/auth-context';
import Img from '../../components/img';

const ProfilePage: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: 'center' }}
      >
        {`Hello, ${user?.name} ${user?.surname}`}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Img src={user?.img} />
      </Box>
    </Container>
  );
};

export default ProfilePage;

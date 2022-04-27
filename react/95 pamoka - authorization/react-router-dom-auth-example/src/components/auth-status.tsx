import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import { Typography, Button } from '@mui/material';

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <Typography>You are not logged in.</Typography>;
  }

  return (
    <Typography>
      Welcome {auth.user}!{" "}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </Button>
    </Typography>
  );
}

export default AuthStatus;
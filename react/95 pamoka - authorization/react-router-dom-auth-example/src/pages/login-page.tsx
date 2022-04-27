import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import useAuth from '../hooks/use-auth';
import { Box, Typography } from '@mui/material';
import ButtonField from "../components/button-field";

type LocationState = {
  from?: {
    path?: string
  }
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = '/';
  let locationState = location.state as LocationState;
  if (locationState.from && locationState.from.path) {
    from = locationState.from.path
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <Box>
      <Typography>You must log in to view the page at {from}</Typography>
      <Box component="form" onSubmit={handleSubmit} >
        <ButtonField
          btnText="Login"
          label="Username"
          name="username"
        />
      </Box>
    </Box>
  );
}

export default LoginPage;
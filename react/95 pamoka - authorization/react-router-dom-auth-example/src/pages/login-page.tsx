import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import useAuth from '../hooks/use-auth';

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
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
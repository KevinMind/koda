import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { getCurrentUser } from '../components/Auth/AppUser';
import { AppContent } from '../components/Layout';

const Profile = () => {
  const user = getCurrentUser();
  return (
    <Container>
      <AppContent>
        <Typography variant="h1">Here is the Profile Page</Typography>
        <Typography>
          Email:
          {user.email}
        </Typography>
        <Typography>
          Phone:
          {user.phone_number}
        </Typography>
        <Link to="/home">Home</Link>
      </AppContent>
    </Container>
  );
};

export default withPrivateRoute(Profile);

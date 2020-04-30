import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { AppContent } from '../components/Layout';

const Home = () => (
  <Container>
    <AppContent>
      <Typography variant="h3" coomponent="h1">Here is the App Home Page</Typography>
      <Typography>
        Since you are now logged in, view your profile:
        {' '}
        <Link to="/profile">View profile</Link>
      </Typography>
      <Typography>
        This starter was built using AWS Amplify. Try it out:
        {' '}
        <a href="https://console.amplify.aws">AWS Amplify</a>
      </Typography>
    </AppContent>
  </Container>
);

export default withPrivateRoute(Home);

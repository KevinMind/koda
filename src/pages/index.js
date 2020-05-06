import React from 'react';
import { navigate } from '@reach/router';
import { Button, Typography } from '@material-ui/core';
import { Auth } from '@aws-amplify/auth';

import { AppUser } from '../components/Auth';
import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import GatsbyIcon from '../assets/vectors/gatsby.svg';
import AmplifyIcon from '../assets/vectors/amplify.svg';
import CognitoIcon from '../assets/vectors/cognito.svg';

const IndexPage = () => {
  const { logout } = AppUser;
  const logOut = (e) => {
    e.preventDefault();

    Auth.signOut()
      .then(logout(() => navigate('/signin')))
      .catch((err) => console.error('error: ', err));
  };
  return (
    <Layout>
      <Layout.Content
        height={90}
        justify="center"
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <GatsbyIcon height={30} />
        <Typography variant="h3">+</Typography>
        <AmplifyIcon height={30} />
        <Typography variant="h3">+</Typography>
        <CognitoIcon height={30} />
      </Layout.Content>
      <Layout.Content
        height={10}
        justify="space-around"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <Button
          onClick={() => navigate('/events/add')}
          color="primary"
          variant="outlined"
        >
          Get Started
        </Button>
        <Button
          onClick={logOut}
          color="primary"
          variant="outlined"
        >
          Log Out
        </Button>
      </Layout.Content>
    </Layout>
  );
}

export default withPrivateRoute(IndexPage);

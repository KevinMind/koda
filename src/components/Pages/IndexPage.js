import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import GatsbyIcon from '../../assets/vectors/gatsby.svg';
import AmplifyIcon from '../../assets/vectors/amplify.svg';
import CognitoIcon from '../../assets/vectors/cognito.svg';

const IndexPage = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{
      height: '100%',
      margin: '0 40px',
    }}
  >
    <GatsbyIcon />
    <Typography variant="h3">+</Typography>
    <AmplifyIcon />
    <Typography variant="h3">+</Typography>
    <CognitoIcon />
  </Grid>
);

export default IndexPage;

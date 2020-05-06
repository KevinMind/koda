import React, { useState } from 'react';
import { Paper, Slider, Typography } from '@material-ui/core';
import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';

const IndexPage = () => {
  const [top, setTop] = useState(30);

  const handleChange = (event, newValue) => {
    setTop(newValue);
  };
  return (
    <Layout>
      <Layout.Content height={top}>
        <Paper variant="outlined" style={{ height: '100%' }}>
          <Typography>Top: {top}</Typography>
          <Slider
            value={top}
            name="top"
            type="number"
            onChange={handleChange}
            min={30}
            max={100}
          />
        </Paper>
      </Layout.Content>
      <Layout.Content height={100 - top}>
        <Paper variant="outlined" style={{ height: '100%' }}>
          <Typography>Bottom: {100 - top}</Typography>
        </Paper>
      </Layout.Content>
    </Layout>
  );
}

export default withPrivateRoute(IndexPage);

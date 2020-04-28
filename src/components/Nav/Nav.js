import React from 'react';
import { Link } from 'gatsby';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

function Nav() {
  return  (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link className="text-center" to="/">
              <Typography variant="button">Authenticaysh</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link className="text-center" to="/signin">
              <Typography variant="button">
                SignIn
              </Typography>
            </Link>
            <Link className="text-center" to="/signup">
              <Typography variant="button">
                SignUp
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;

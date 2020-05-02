import React from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import {
  AppBar, Toolbar, Grid, Button,
} from '@material-ui/core';

import { Auth } from '@aws-amplify/auth';
import { AppUser } from '../Auth';

function UserNav() {
  const { logout } = AppUser;
  function logOut(e) {
    e.preventDefault();

    Auth.signOut()
      .then(logout(() => navigate('/signin')))
      .catch((err) => console.error('error: ', err));
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link className="text-center" to="/events">
              <p style={{ margin: 0 }} className="nav-link">
                List
              </p>
            </Link>
          </Grid>
          <Grid item>
            <Link className="text-center" to="/events/add">
              <p style={{ margin: 0 }} className="nav-link">
                Add
              </p>
            </Link>
          </Grid>
          <Grid item>
            <Button
              onClick={(e) => logOut(e)}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default UserNav;

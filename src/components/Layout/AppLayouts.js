import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Container } from '@material-ui/core';

import { Nav, UserNav } from '../Nav';

export function Layout({ children, isUserNav }) {
  return (
    <>
      <CssBaseline />
      {isUserNav ? <UserNav /> : <Nav />}
      <div style={{ height: 'calc(100vh - 56px)' }}>{children}</div>
    </>
  );
}

Layout.defaultProps = {
  isUserNav: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isUserNav: PropTypes.bool,
};

export function AppContent({ children }) {
  return (
    <Container>
      <Container style={{ marginTop: 40 }}>{children}</Container>
    </Container>
  );
}

AppContent.propTypes = {
  children: PropTypes.node.isRequired,
};

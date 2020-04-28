import React from 'react';
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

export function AppContent({ children }) {
  return (
    <Container>
      <Container style={{ marginTop: 40 }}>{children}</Container>
    </Container>
  );
}

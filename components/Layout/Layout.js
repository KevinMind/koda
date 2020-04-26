import React from 'react';
import PropTypes from 'prop-types';

import { Container, CssBaseline, styled } from '@material-ui/core';
import Header from './Header';
import Nagivation from './Nagivation';

const Wrapper = styled(Container)({
  height: '100vh',
});

const TopContent = styled(Container)({
  height: '10vh',
});

const MainContent = styled(Container)({
  height: '80vh',
  padding: '2rem',
});

const BottomContent = styled(Container)({
  height: '10vh',
  borderTop: '1px solid',
  position: 'fixed',
  bottom: 0,
});

const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <Wrapper disableGutters>
      <TopContent disableGutters>
        <Header />
      </TopContent>
      <MainContent disableGutters>
        {children}
      </MainContent>
      <BottomContent disableGutters>
        <Nagivation />
      </BottomContent>
    </Wrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

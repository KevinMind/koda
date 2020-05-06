import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Grid } from '@material-ui/core';

import { AppUser } from '../Auth';

import * as Styled from './Layout.styled';

const validChildren = Object.values(Styled);

const Layout = ({ children }) => {
  const { isLoggedIn } = AppUser;
  return (
    <Styled.Container>
      <CssBaseline>
        <style>
          {`
            html {
              height: 100%;
            }
          `}
        </style>
      </CssBaseline>
      {React.Children.map(children, child => {
        if (validChildren.includes(child.type)) {
          return React.cloneElement(child, {
            isLoggedIn: isLoggedIn()
          })
        } else {
          return (
            <Grid item>
              {child}
            </Grid>
          )
        }
      })}
    </Styled.Container>
  );
};

Layout.defaultProps = {
  isUserNav: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isUserNav: PropTypes.bool,
};

Layout.Content = Styled.Content;
Layout.Header = Styled.Header;
Layout.Main = Styled.Main;
Layout.Footer = Styled.Footer;
Layout.FixedContent = Styled.FixedContent;

export default Layout;

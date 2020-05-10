import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';

import * as Styled from './Layout.styled';

function useClientRect() {
  const [rect, setRect] = useState(null);

  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

const getProps = (child, { footerHeight, headerHeight }) => {
  switch (child?.type) {
    case Layout.Bottom:
      return {
        style: {
          bottom:footerHeight,
          top: 'auto',
          position: 'fixed',
          width: '100%',
        }
      };
    case Layout.Top:
      return {
        style: {
          top: headerHeight,
          bottom: 'auto',
          position: 'fixed',
          width: '100%',
        }
      };
    case Layout.Content:
    default:
      return {};
  }
};

const Layout = ({ children, Footer, Header, headerProps, footerProps }) => {
  const [headerHeight, headerRef] = useClientRect();
  const [footerHeight, footerRef] = useClientRect();

  const minHeight = typeof window !== 'undefined'
    ? window.innerHeight - (headerHeight?.height + footerHeight?.height)
    : undefined;

  const childProps = {
    minHeight,
    footerHeight: footerHeight?.height,
    headerHeight: headerHeight?.height,
  };

  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <CssBaseline />
      {Header && (
        <Styled.Header ref={headerRef} {...headerProps}>
          {Header}
        </Styled.Header>
      )}
      <Styled.Container height={minHeight}>
        {typeof children === 'function'
          ? children(Styled.Content, childProps)
          : React.Children.map(children, child => {
            const props = getProps(child, childProps);
            return (
              <Styled.Content
                {...props}
              >
                {child}
              </Styled.Content>
            );
          })
        }
      </Styled.Container>
      {Footer && (
        <Styled.Footer ref={footerRef} {...footerProps}>
          {Footer}
        </Styled.Footer>
      )}
    </React.Fragment>
  );
};

Layout.defaultProps = {
  headerProps: {
    elevation: 0
  },
  footerProps: {
    elevation: 0
  },
  isUserNav: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isUserNav: PropTypes.bool,
};

Layout.Top = ({ children }) => <React.Fragment>{children}</React.Fragment>;
Layout.Bottom = ({ children }) => <React.Fragment>{children}</React.Fragment>;
Layout.Content = ({ children }) => <React.Fragment>{children}</React.Fragment>;
Layout.Header = ({ children }) => <React.Fragment>{children}</React.Fragment>;
Layout.Footer = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export default Layout;

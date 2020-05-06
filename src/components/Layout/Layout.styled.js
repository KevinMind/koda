import React from 'react';
import PropTypes from 'prop-types';
import { Grid, styled } from '@material-ui/core';

export const Container = styled(Grid)(() => ({
  height: '100vh',
  width: '100vw',
  flexDirection: 'column'
}));

const buildGrid = (cb) => {
  const itemProps = {
    children: PropTypes.node.isRequired,
  };

  const itemDefaultProps = {
    item: true,
    height: 100,
  };

  const Item = styled(Grid)(cb);

  Item.propTypes = {
    ...itemProps
  };

  Item.defaultProps = {
    ...itemDefaultProps
  };
  return Item;
};

export const Content = buildGrid(({  height, justifyContent, alignItems, display }) => {
  const styles = {
    height: height && `${height}vh`,
    overflow: 'scroll'
  };

  if (justifyContent || alignItems) {
    styles.display = 'flex';
  }

  return styles;
});

export const Header = buildGrid(() => ({
  height: '10vh',
}));

export const Main = buildGrid(() => ({
  height: '80vh',
}));

export const Footer = buildGrid(() => ({
  height: '10vh',
  overflow: 'scroll'
}));


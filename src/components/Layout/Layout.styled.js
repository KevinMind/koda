import React from 'react';
import PropTypes from 'prop-types';
import { Grid, styled } from '@material-ui/core';

export const Container = styled(Grid)(() => ({
  position: 'relative',
  height: '100%',
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

export const Content = buildGrid(({
  position,
  top,
  backgroundColor,
  height,
  justifyContent,
  alignItems,
}) => {
  const windowHeight = window.innerHeight;
  const factor = height * 0.01;
  const styles = {
    backgroundColor: backgroundColor || 'white',
    position,
    top,
    height: height ? factor * windowHeight : 'auto',
    transition: 'height 0.7s',
  };

  if (justifyContent || alignItems) {
    styles.display = 'flex';
  }

  return styles;
});

export const FixedContent = styled(Content)(({ top, bottom, right, left, width }) => ({
  top,
  bottom,
  right,
  left,
  position: 'fixed',
  width: width || '100%'
}));

export const Header = styled(Content)(() => ({
  height: '10%',
}));

export const Main = styled(Content)(() => ({
  height: '80%',
}));

export const Footer = styled(Content)(() => ({
  height: '10%',
  overflow: 'scroll'
}));


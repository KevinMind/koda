import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Typography, ListItemIcon } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { ArrowForwardIos } from '@material-ui/icons';
import ImageIcon from '@material-ui/icons/Image';
import { format as formatDate } from 'date-fns'
import Swipeable from '../../Swipeable/Swipeable';

import * as Styled from './EventList.styled';

export const EventList = ({ onSwipeLeft, onSwipeRight, children }) => (
  <Swipeable
    onSwipeLeft={onSwipeLeft}
    onSwipeRight={onSwipeRight}
    leftContent={
      <Styled.SwipeContent color={red[500]} edge="end">
        left
      </Styled.SwipeContent>
    }
    rightContent={
      <Styled.SwipeContent color={grey[100]} edge="start">
        right
      </Styled.SwipeContent>
    }
  >
    {children}
  </Swipeable>
);

export const EventListItem = ({ item, onClick, color }) => {
  return (
    <ListItem onClick={() => onClick(item)} style={{ cursor: 'pointer' }}>
      <ListItemAvatar>
        <Styled.Avatar color={color}>
          <ImageIcon />
        </Styled.Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography>
              {item.category}
            </Typography>
            <Typography>
              {formatDate(new Date(item.start), 'dd/MM/yyyy HH:MM')}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography>
              {item.value}
            </Typography>
          </React.Fragment>
        } />
      <ListItemIcon>
        <ArrowForwardIos />
      </ListItemIcon>
    </ListItem>
  );
};

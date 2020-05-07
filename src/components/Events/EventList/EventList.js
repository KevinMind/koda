import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { format as formatDate } from 'date-fns'
import Swipeable from '../../Swipeable/Swipeable';


export const EventList = ({ onSwipeLeft, onSwipeRight, children }) => (
  <Swipeable
    onSwipeLeft={onSwipeLeft}
    onSwipeRight={onSwipeRight}
    leftContent={<div>left</div>}
    rightContent={<div>right</div>}
  >
    {children}
  </Swipeable>
);

export const EventListItem = ({ item, onClick }) => {
  return (
    <ListItem onClick={() => onClick(item)} style={{ cursor: 'pointer' }}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
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
    </ListItem>
  );
};

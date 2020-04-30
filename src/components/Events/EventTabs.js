import React from 'react';
import { Tabs, Tab, Paper } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const EventTabs = ({ selected, onTab }) => {
  return (
    <Paper square>
      <Tabs
        value={selected}
        onChange={onTab}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<PhoneIcon />} aria-label="phone" />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" />
        <Tab icon={<PersonPinIcon />} aria-label="person" />
      </Tabs>
    </Paper>
  );
};

export default EventTabs;

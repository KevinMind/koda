import React from 'react';
import { Badge, Tab, Tabs as MuiTabs } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import { Categories } from './data';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

export const EventTabItem = ({ label, index, count, icon: Icon }) => (
  <Tab
    label={label}
    icon={
      <React.Fragment>
        <Badge badgeContent={count} color="secondary">
          <Icon />
        </Badge>
      </React.Fragment>
    }
    {...a11yProps(index)}
  />
);

export const EventTabList = ({ tab, selectTab, children }) => (
  <MuiTabs
    value={tab}
    onChange={selectTab}
    variant="scrollable"
    scrollButtons="on"
    indicatorColor="primary"
    textColor="primary"
    aria-label="scrollable force tabs example"
  >
    {children}
  </MuiTabs>
);

export const EventTabContent = ({ selectTab, tab, children }) => (
  <SwipeableViews
    containerStyle={{
      position: 'relative',
      height: '100%',
      width: '100%',
    }}
    style={{ height: '100%' }}
    index={tab}
    onChangeIndex={idx => selectTab({}, idx)}
  >
    {children}
  </SwipeableViews>
);

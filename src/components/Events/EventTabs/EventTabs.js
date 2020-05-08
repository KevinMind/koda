import React from 'react';
import { Badge, Tab, Tabs } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import * as Styled from './EventTabs.styled';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

export const EventTabItem = ({
  selectTab,
  category,
  index,
  count,
  selected,
}) => {
  const Icon = category.icon;
  return (
    <Styled.Tab
      selected={selected}
      filled={count > 0}
      onClick={e => selectTab(e, index)}
      color={category.color}
      icon={
        <React.Fragment>
          <Styled.Badge badgeContent={count} color="primary">
            <Icon />
          </Styled.Badge>
        </React.Fragment>
      }
      {...a11yProps(index)}
    />
  );
};

export const EventTabList = ({ tab, selectTab, children }) => (
  <Styled.Tabs
    color='#635ee7'
    value={tab}
    onChange={selectTab}
    variant="scrollable"
    scrollButtons="on"
    aria-label="scrollable force tabs example"
  >
    {children}
  </Styled.Tabs>
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

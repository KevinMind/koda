import React, { useState, useContext } from 'react';
import {Tabs as MuiTabs, Tab, Badge } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import HelpIcon from '@material-ui/icons/Help';
import EventContext from '../Events/context';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const Tabs = ({ children }) => {
  const { form } = useContext(EventContext);
  const [selected, setSelected] = useState(0);

  const handleChange = (event, newValue) => {
    setSelected(newValue);
  };
  return (
    <>
      <MuiTabs
        value={selected}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        {React.Children.map(children, (({ props: { label, icon: Icon } }, index) => {
          const itemCount = form.filter(({ category }) => label === category).length;
          return (
            <Tab
              label={label}
              icon={
                <React.Fragment>
                  <Badge badgeContent={itemCount}>
                    <Icon />
                  </Badge>
                </React.Fragment>
              }
              {...a11yProps(index)}
            />
          )
        }))}
      </MuiTabs>
      <SwipeableViews
        index={selected}
        onChangeIndex={idx => handleChange({}, idx)}
      >
        {children}
      </SwipeableViews>
    </>
  )
};

export default Tabs;

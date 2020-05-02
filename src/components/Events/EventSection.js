import React, {useContext } from 'react';
import { Tab, Tabs, Badge } from '@material-ui/core';

import TabPanel from './TabPanel';
import AddEvent from './AddEvent';
import EventContext from './context';

const Section = ({ categories })  => {
  const {
    section,
    categoryIdx,
    onChangeCategory,
    getValues,
  } = useContext(EventContext);

  return (
    <React.Fragment>
      <Tabs
        value={categoryIdx}
        onChange={onChangeCategory}
        variant="fullWidth"
      >
        {categories.map(({ icon: Icon, label }) => {
          const count = getValues({ section, category: label }).length;
          const tabProps = {};
          if (Icon) {
            tabProps.icon = (
              <Badge badgeContent={count}>
                <Icon />
              </Badge>
            );
          }
          if (label) {
            tabProps.label = label;
          }
          return (
            <Tab {...tabProps} />
          )
        })}
      </Tabs>
      {categories.map((cat, index) => (
        <TabPanel value={categoryIdx} index={index} key={cat.label}>
          <AddEvent
            options={cat.options}
            category={cat.label}
          />
        </TabPanel>
      ))}
    </React.Fragment>
  );
};

export default Section;

import React, {useState} from 'react';
import { Tab, Tabs, Typography } from '@material-ui/core';

import TabPanel from './TabPanel';
import AddEvent from './AddEvent';

const Section = ({ label, categories })  => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);
  return (
    <div>
      <Typography>{label}</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
      >
        {categories.map(({ icon: Icon }) => (
          <Tab icon={<Icon />} />
        ))}
      </Tabs>
      {categories.map(({ label }, index) => (
        <TabPanel value={value} index={index}>
          <Typography>
            {label}
          </Typography>
          <AddEvent />
        </TabPanel>
      ))}
    </div>
  );
};

export default Section;

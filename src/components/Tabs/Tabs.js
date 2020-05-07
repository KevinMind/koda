import React, { useState } from 'react';

const TabButtons = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

const TabContent = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const handleChange = (event, newValue) => setSelected(newValue);

  return children({
    tab: selected,
    selectTab: handleChange,
  });
};

Tabs.Header = TabButtons;
Tabs.Content = TabContent;

export default Tabs;

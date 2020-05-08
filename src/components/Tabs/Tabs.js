import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const handleChange = (event, newValue) => {
    console.log({ newValue, selected });
    setSelected(newValue);
  };

  return children({
    tab: selected,
    selectTab: handleChange,
  });
};

export default Tabs;

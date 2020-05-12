import React from 'react';
import {Data} from '../data';

const AddEvent = ({ label, color, children }) => {
  const items = Data.filter(({ category }) => category === label);
  const itemProps = {
    color: color[500],
  };

  return (
    <div
      style={{
        padding: 10,
        display: 'grid',
        gridGap: 10,
        gridTemplateRows: 140,
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      {items.map(item => children(item, itemProps))}
    </div>
  );
};

export default AddEvent;

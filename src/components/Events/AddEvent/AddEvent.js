import React from 'react';
import { Data } from '../data';

const AddEvent = ({ label, color, children }) => {
  const items = Data.filter(({ category }) => category === label);
  return (
    <div
      style={{
        padding: 10,
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      {items.map((item, index) => {
          return children(item, { color: color[500]});
        })
      }
    </div>
  );
};

export default AddEvent;

import React from 'react';
import {Data} from '../data';

const AddEvent = ({ label, color, children, data }) => {
  const items = Data.filter(({ category }) => category === label);
  const selected = data.map(({ value }) => value);

  const selectedItems = [];
  const unSelectedItems = [];

  items.forEach(item => {
    if (selected.includes(item.value)) {
      selectedItems.push(item);
    } else {
      unSelectedItems.push(item);
    }
  });

  const itemProps = {
    color: color[500],
  };

  return (
    <div>
      {selectedItems.length && (
        <React.Fragment>
          <p>Selected</p>
          <div
            style={{
              padding: 10,
              display: 'grid',
              gridGap: 10,
              gridTemplateRows: 120,
              gridTemplateColumns: '1fr',
            }}
          >
            {selectedItems.map(item => children(item, itemProps))}
          </div>
        </React.Fragment>
      )}
      <p>Un Selected</p>
      <div
        style={{
          padding: 10,
          display: 'grid',
          gridGap: 10,
          gridTemplateRows: 120,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {unSelectedItems.map(item => children(item, itemProps))}
      </div>
    </div>
  );
};

export default AddEvent;

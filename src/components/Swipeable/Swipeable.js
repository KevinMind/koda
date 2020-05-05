import React from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

const Swipeable = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  leftContent,
  rightContent,
  onSwipeProgress,
}) => (
  <SwipeableList>
    {React.Children.map(children, (child, idx) => {
      const { props } = child;
      return (
        <SwipeableListItem
          swipeLeft={{
            content: leftContent,
            action: () => onSwipeLeft(idx, props),
          }}
          swipeRight={{
            content: rightContent,
            action: () => onSwipeRight(idx, props),
          }}
          onSwipeProgress={onSwipeProgress}
        >
          {child}
        </SwipeableListItem>
      )
    })}
  </SwipeableList>
);

export default Swipeable;

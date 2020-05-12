import React from 'react';
import {format} from "date-fns";
import {Add} from '@material-ui/icons';

import * as Styled from './SelectedEvent.styled';

const Chips = ({ children, color }) => (
  <Styled.OptionContent color={color}>
    {React.Children.map(children, (child) => (
      <div style={{ marginRight: 5 }}>
        {child}
      </div>
    ))}
  </Styled.OptionContent>
);

const SelectedEvent = ({ item, data, onSelect, selected, color }) => {
  let layout = '1fr';
  if (selected) {
    layout = '2fr 1fr';
  }
  if (data?.success || data?.outside) {
    layout = '50% 20% 30%';
  }
  return (
    <Styled.Container>
      <Styled.OptionContainer
        layout={layout}
        color={color}
        selected={selected}
        onClick={onSelect}
      >
        <Styled.OptionIcon>
          <Add />
        </Styled.OptionIcon>
        {data?.start && (
          <Styled.DateText color={color}>
            {format(new Date(data.start), 'dd/MM/yyy HH:mm')}
          </Styled.DateText>
        )}
        {data && (
          <Chips color={color}>
            {data?.success && (
              <Styled.DateText>success</Styled.DateText>
            )}
            {data?.outside && (
              <Styled.DateText>outside</Styled.DateText>
            )}
            {data?.note && (
              <Styled.DateText>note...</Styled.DateText>
            )}
          </Chips>
        )}
      </Styled.OptionContainer>
      <Styled.OptionTitle color={color}>
        {item.label}
      </Styled.OptionTitle>
    </Styled.Container>
  );
};

export default SelectedEvent;

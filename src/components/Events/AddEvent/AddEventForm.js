import React, {useState} from 'react';
import { addMinutes } from 'date-fns';
import {
  Avatar,
  Button,
  CardHeader,
  IconButton
} from '@material-ui/core';
import { Add, Delete, Clear } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import * as Styled from './AddEventForm.styled';

import { SwitchControl, TimeControl, DurationControl, TextAreaControl } from '../EditEvent';

const Form = ({ children }) => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <SwipeableViews
        index={tab}
        onChangeIndex={i => setTab(i)}
        containerStyle={{ height: '100%' }}
      >
        {children}
      </SwipeableViews>
      <Styled.Pagination>
        {React.Children.map(children, (_, idx) => (
          <Styled.Tile selected={idx === tab} />
        ))}
      </Styled.Pagination>
    </div>
  );
};

const AddEventForm = ({ onFinish, onCancel, onRemove, item, category, data }) => {
  const [start, setStart] = useState(data?.start || new Date());
  const [duration, setDuration] = useState(data?.duration || 0);
  const [success, setSuccess] = useState(data?.success || false);
  const [outside, setOutside] = useState(data?.outside);
  const [note, setNote] = useState(data?.note);

  const color = category?.color['500'];

  const handleDone = () => onFinish({
    success,
    outside,
    start,
    end: addMinutes(start, duration),
    note,
  });

  if (!item) {
    return null;
  }

  return (
    <Styled.Container color={color}>
      <CardHeader
        avatar={
          <Avatar>
            <Add />
          </Avatar>
        }
        action={
          <React.Fragment>
            {!!data && (
              <IconButton onClick={() => onRemove(item)}>
                <Delete />
              </IconButton>
            )}
          </React.Fragment>
        }
        title={item.value}
        subheader={category.label}
      />
      <Styled.Content>
        <Form>
          <Styled.Page>
            <TimeControl
              value={start}
              onChange={setStart}
              label="Start"
            />
            <DurationControl
              value={duration}
              onChange={setDuration}
            />
          </Styled.Page>
          <Styled.Page>
            <SwitchControl
              value={success}
              onChange={setSuccess}
              label="Successful?"
            />
            <SwitchControl
              value={outside}
              onChange={setOutside}
              label="Outside?"
            />
          </Styled.Page>
          <Styled.Page>
            <TextAreaControl
              label="Note"
              value={note}
              onChange={setNote}
            />
          </Styled.Page>
        </Form>
      </Styled.Content>
      <Styled.Actions disableSpacing>
        <IconButton onClick={onCancel}>
          <Clear />
        </IconButton>
        <Styled.Submit onClick={handleDone} fullWidth variant="contained" color={color}>
          Done
        </Styled.Submit>
      </Styled.Actions>
    </Styled.Container>
  );
};

export default AddEventForm;

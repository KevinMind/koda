import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { set, get } from 'lodash';

import withPrivateRoute from '../../components/Routes/PrivateRoute';
import Section from '../../components/Events/EventSection';
import TabPanel from '../../components/Events/TabPanel';
import SubmitEvent from '../../components/Events/SubmitEvent';

import Sections, { getInitialState } from '../../components/Events/data';
import EventContext from '../../components/Events/context';
import { createEvent, createMood, createActivity } from '../../services/events';

const Events = () => {
  const [outside, setOutside] = useState(false);
  const [success, setSucess] = useState(false);
  const [formState, setForm] = useState(getInitialState());

  const [section, setSection] = useState(Sections[0].label);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [category, setCategory] = useState(Sections[0].categories[0].label);
  const [categoryIdx, setCategoryIdx] = useState(0);

  const handleChange = (event, newValue) => {
    setCategoryIdx(newValue);
    const category = Sections[sectionIdx].categories[newValue].label;
    setCategory(category);
  };

  const handleChangeIndex = (index) => {
    const { label, categories } = Sections[index];
    setSection(label);
    setSectionIdx(index);
    setCategoryIdx(0);
    setCategory(categories[0].label);
  };

  const handleToggleSuccess = () => setSucess(!success);
  const handleToggleOutside = () => setOutside(!outside);

  const getLabels = () => {
    return {
      section,
      category,
    };
  };

  const getValues = (curr = getLabels()) => {
    return get(formState, [curr.section, curr.category], []);
  };

  const setValues = (newValues) => {
    const labels = getLabels();
    const copy = { ...formState };
    set(copy, [labels.section, labels.category], newValues);
    setForm(copy);
  };

  const resetFormState = () => {
    handleChangeIndex(0);
    setForm(getInitialState());
  };

  const handleFormChange = (value, checked) => {
    const state = getValues({ section, category });
    const idx = state.findIndex(i => i === value);

    if (checked && idx === -1) {
      state.push(value);
    }
    if (!checked && idx > -1) {
      state.splice(idx, 1);
    }
    setValues(state);
  };

  const handleFormSubmit = () => {
    const list = [];
    const startTime = new Date().toJSON();
    const { Events, Moods, Activities } = formState;

    console.log(Moods);

    Object.keys(Moods).forEach(category => {
      const values = Moods[category];
      if (values.length) {
        list.push(createMood({
          outside,
          success,
          startTime,
          category,
          values,
        }));
      }
    });

    Object.keys(Activities).forEach(category => {
      const values = Activities[category];
      if (values.length) {
        list.push(createActivity({
          outside,
          success,
          startTime,
          endTime: 'null',
          category,
          values
        }));
      }
    });

    Object.keys(Events).forEach(category => {
      const values = Events[category];
      if (values.length) {
        list.push(createEvent({
          outside,
          success,
          startTime,
          category,
          values,
        }));
      }
    });

    Promise.all(list).then(() => {
      resetFormState();
    })

  };

  return (
    <EventContext.Provider value={{
      success,
      outside,
      section,
      sectionIdx,
      category,
      categoryIdx,
      state: formState,
      onToggleSuccess: handleToggleSuccess,
      onToggleOutside: handleToggleOutside,
      onChange: handleFormChange,
      onChangeCategory: handleChange,
      onSubmit: handleFormSubmit,
      getValues,
    }}>
      <Grid
        style={{ height: '100%' }}
        component={Container}
        container
        direction="column"
      >
        <Grid
          item
          style={{ height: '90%' }}
        >
          <SwipeableViews
            style={{ height: '100%' }}
            index={sectionIdx}
            onChangeIndex={handleChangeIndex}
          >
            {Sections.map(({ categories, label }, index) => {
              return (
                <TabPanel value={sectionIdx} index={index} key={label}>
                  <Typography>
                    {label}
                  </Typography>
                  <Section
                    categories={categories}
                  />
                </TabPanel>
              )
            })}
          </SwipeableViews>
        </Grid>
        <Grid
          item
          style={{ height: '10%' }}
        >
          <SubmitEvent />
        </Grid>
      </Grid>
    </EventContext.Provider>
  )
};

export default withPrivateRoute(Events);

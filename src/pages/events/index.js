import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { Fastfood, Bathtub, Wc, FitnessCenter, School, SentimentSatisfiedAlt, Mood } from '@material-ui/icons';

import withPrivateRoute from '../../components/Routes/PrivateRoute';
import Section from '../../components/Events/EventSection';
import TabPanel from '../../components/Events/TabPanel';

const Sections = [
  {
    label: 'Events',
    categories: [
      {
        label: 'intake',
        icon: Fastfood,
      },
      {
        label: 'grooming',
        icon: Bathtub,
      },
      {
        label: 'output',
        icon: Wc,
      }
    ]
  },
  {
    label: 'Activities',
    categories: [
      {
        label: 'training',
        icon: School,
      },
      {
        label: 'fun',
        icon: SentimentSatisfiedAlt,
      },
      {
        label: 'exercise',
        icon: FitnessCenter,
      },
    ]
  },
  {
    label: 'Moods',
    categories: [
      {
        label: 'moods',
        icon: Mood,
      },
    ]
  },
  {
    label: 'On/Off',
    categories: [
      {
        label: 'sleep',
        icon: Fastfood,
      },
    ]
  }
];

const Events = () => {
  const [section, setSection] = useState(0);

  const handleChangeIndex = (index) => {
    setSection(index);
  };

  return (
    <Container>
      <Grid container spacing={1} direction="column">
        <Grid item>
          <Typography variant="h4" component="h1">Events  {section + 1} / {Sections.length}</Typography>
        </Grid>
        <Grid item>
          <SwipeableViews
            index={section}
            onChangeIndex={handleChangeIndex}
          >
            {Sections.map(({ label, categories }, index) => (
              <TabPanel value={section} index={index}>
                <Section label={label} categories={categories} />
              </TabPanel>
            ))}
          </SwipeableViews>
        </Grid>
      </Grid>
    </Container>
  )
};

export default withPrivateRoute(Events);

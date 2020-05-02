import React from 'react';
import {Bathtub, Fastfood, FitnessCenter, Mood, School, SentimentSatisfiedAlt, Wc} from '@material-ui/icons';

const Sections = [
  {
    label: 'Events',
    categories: [
      {
        label: 'intake',
        icon: Fastfood,
        options: [
          {
            label: 'water',
            value: 'water'
          },
          {
            label: 'eat',
            value: 'eat'
          },
          {
            label: 'meds',
            value: 'meds'
          },
        ]
      },
      {
        label: 'grooming',
        icon: Bathtub,
        options:  [
          {
            label: 'bath',
            value: 'bath',
          },
          {
            label: 'nails',
            value: 'nails',
          },
          {
            label: 'teeth',
            value: 'teeth',
          },
          {
            label: 'ears',
            value: 'ears',
          },
          {
            label: 'hair',
            value: 'hair',
          },
        ]
      },
      {
        label: 'output',
        icon: Wc,
        options: [
          {
            label: 'pee',
            value: 'pee',
          },
          {
            label: 'poop',
            value: 'poop',
          },
        ]
      }
    ]
  },
  {
    label: 'Activities',
    categories: [
      {
        label: 'training',
        icon: School,
        options: [
          {
            label: 'crate',
            value: 'crate',
          },
          {
            label: 'commands',
            value: 'commands',
          },
          {
            label: 'targeting',
            value: 'targeting',
          },
          {
            label: 'puppySchool',
            value: 'puppySchol',
          },
        ]
      },
      {
        label: 'fun',
        icon: SentimentSatisfiedAlt,
        options: [
          {
            label: 'park',
            value: 'park',
          },
          {
            label: 'socializing',
            value: 'socializing',
          },
          {
            label: 'playDate',
            value: 'playDate',
          },
        ]
      },
      {
        label: 'exercise',
        icon: FitnessCenter,
        options:  [
          {
            label: 'walk',
            value: 'walk',
          },
          {
            label: 'run',
            value: 'run',
          },
          {
            label: 'agility',
            value: 'agility',
          },
        ]
      },
    ]
  },
  {
    label: 'Moods',
    categories: [
      {
        label: 'moods',
        icon: Mood,
        options: [
          {
            label: 'bitey',
            value: 'bitey',
          },
          {
            label: 'cuddles',
            value: 'cuddles',
          },
          {
            label: 'play',
            value: 'play',
          },
          {
            label: 'calm',
            value: 'calm',
          },
          {
            label: 'rambo',
            value: 'rambo',
          },
          {
            label: 'tired',
            value: 'tired',
          },
          {
            label: 'whining',
            value: 'whining',
          },
          {
            label: 'nervous',
            value: 'nervous',
          },
        ]
      },
    ]
  },
  {
    label: 'On/Off',
    categories:[
      {
        label: 'zzz',
        options:  [
          {
            label: 'nap',
            value: 'nap',
          },
          {
            label: 'sleep',
            value: 'sleep',
          },
          {
            label: 'downtime',
            value: 'downtime',
          },
        ]
      },
    ]
  }
];

export const getInitialState = () => Sections.reduce((acm, section) => {
  const categories = section.categories.reduce((acm, category) => {
    acm[category.label] = [];
    return acm;
  }, {});
  acm[section.label] = categories;
  return acm;
}, {});

export default Sections;

import React from 'react';
import {
  purple, red, green, blue, orange, brown, cyan, teal,
} from '@material-ui/core/colors';
import {Bathtub, Fastfood, FitnessCenter, Mood, School, SentimentSatisfiedAlt, Wc} from '@material-ui/icons';

const CategoryKeys = {
  intake: 'intake',
  grooming: 'grooming',
  output: 'output',
  training: 'training',
  fun: 'fun',
  exercise: 'exercise',
  moods: 'moods',
  sleep: 'zzz',
};

export const Categories = [
  {
    label: CategoryKeys.intake,
    icon: Fastfood,
    color: orange,
  },
  {
    label: CategoryKeys.grooming,
    icon: Bathtub,
    color: cyan,
  },
  {
    label: CategoryKeys.output,
    icon: Wc,
    color: brown,
  },
  {
    label: CategoryKeys.training,
    icon: School,
    color: red,
  },
  {
    label: CategoryKeys.fun,
    icon: SentimentSatisfiedAlt,
    color: blue,
  },
  {
    label: CategoryKeys.exercise,
    icon: FitnessCenter,
    color: teal,
  },
  {
    label: CategoryKeys.moods,
    icon: Mood,
    color: purple,
  },
  {
    label: CategoryKeys.sleep,
    icon: Wc,
    color: green,
  }
];

const DataKeys = {
  water: 'water',
  eat: 'eat',
  meds: 'meds',
  pee: 'pee',
  poop: 'poop',
  bath: 'bath',
  nails: 'nails',
  teeth: 'teeth',
  ears: 'ears',
  hair: 'hair',
  crate: 'crate',
  commands: 'commands',
  targeting: 'targeting',
  school: 'school',
  park: 'park',
  socializing: 'socializing',
  playDate: 'playDate',
  walk: 'walk',
  run: 'run',
  agility: 'agility',
  bity: 'bity',
  cuddles: 'cuddles',
  play: 'play',
  calm: 'calm',
  rambo: 'rambo',
  tired: 'tired',
  whining: 'whining',
  nervous: 'nervous',
  nap: 'nap',
  sleep: 'sleep',
  downTime: 'downTime',
};

export const Data = [
  {
    label: 'Water',
    value: DataKeys.water,
    category: CategoryKeys.intake,
  },
  {
    label: 'Eat',
    value: DataKeys.eat,
    category: CategoryKeys.intake,
  },
  {
    label: 'Medicine',
    value: DataKeys.meds,
    category: CategoryKeys.intake,
  },
  {
    label: 'Pee',
    value: DataKeys.pee,
    category: CategoryKeys.output,
  },
  {
    label: 'Poop',
    value: DataKeys.poop,
    category: CategoryKeys.output,
  },
  {
    label: 'Bath',
    value: DataKeys.bath,
    category: CategoryKeys.grooming,
  },
  {
    label: 'Nails',
    value: DataKeys.nails,
    category: CategoryKeys.grooming,
  },
  {
    label: 'Teeth',
    value: DataKeys.teeth,
    category: CategoryKeys.grooming,
  },
  {
    label: 'Ears',
    value: DataKeys.ears,
    category: CategoryKeys.grooming,
  },
  {
    label: 'Hair',
    value: DataKeys.hair,
    category: CategoryKeys.grooming,
  },
  {
    label: 'Crate',
    value: DataKeys.crate,
    category: CategoryKeys.training,
  },
  {
    label: 'Commands',
    value: DataKeys.commands,
    category: CategoryKeys.training,
  },
  {
    label: 'Targeting',
    value: DataKeys.targeting,
    category: CategoryKeys.training,
  },
  {
    label: 'Puppy School',
    value: DataKeys.school,
    category: CategoryKeys.training,
  },
  {
    label: 'Park',
    value: DataKeys.park,
    category: CategoryKeys.fun,
  },
  {
    label: 'Socializing',
    value: DataKeys.socializing,
    category: CategoryKeys.fun,
  },
  {
    label: 'Play Date',
    value: DataKeys.playDate,
    category: CategoryKeys.fun,
  },
  {
    label: 'Walk',
    value: DataKeys.walk,
    category: CategoryKeys.exercise,
  },
  {
    label: 'Run',
    value: DataKeys.run,
    category: CategoryKeys.exercise,
  },
  {
    label: 'Agility',
    value: DataKeys.agility,
    category: CategoryKeys.exercise,
  },
  {
    label: 'Biting',
    value: DataKeys.bity,
    category: CategoryKeys.moods,
  },
  {
    label: 'Nervous',
    value: DataKeys.nervous,
    category: CategoryKeys.moods,
  },
  {
    label: 'Whining',
    value: DataKeys.whining,
    category: CategoryKeys.moods,
  },
  {
    label: 'Cuddles',
    value: DataKeys.cuddles,
    category: CategoryKeys.moods,
  },
  {
    label: 'Play',
    value: DataKeys.play,
    category: CategoryKeys.moods,
  },
  {
    label: 'Calm',
    value: DataKeys.calm,
    category: CategoryKeys.moods,
  },
  {
    label: 'Rambunctious',
    value: DataKeys.rambo,
    category: CategoryKeys.moods,
  },
  {
    label: 'Tired',
    value: DataKeys.tired,
    category: CategoryKeys.moods,
  },
  {
    label: 'Nap',
    value: DataKeys.nap,
    category: CategoryKeys.sleep,
  },
  {
    label: 'Sleep',
    value: DataKeys.sleep,
    category: CategoryKeys.sleep,
  },
  {
    label: 'Down Time',
    value: DataKeys.downTime,
    category: CategoryKeys.sleep,
  },
];

export const config = [
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
  },
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
];

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

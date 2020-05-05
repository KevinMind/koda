import React, {useState} from 'react';
import Dialog from '../Dialog/Dialog';
import {
  Button, Grid, IconButton, MobileStepper
} from '@material-ui/core';
import {Cancel} from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import {KeyboardDatePicker, KeyboardTimePicker} from '@material-ui/pickers';

const steps = [
  KeyboardDatePicker,
  KeyboardTimePicker,
];

const EditDate = ({
  active,
  onEnd,
  onStep,
  onChange,
  value,
  label,
  format,
}) => {
  const [step, setStep] = useState(0);

  const resetSteps = () => {
    setStep(0);
    onEnd()
  };

  const viewDate = () => setStep(0);
  const viewTime = () => setStep(1);
  return (
    <Dialog open={active}>
      <Dialog.Title>
        <IconButton onClick={onEnd}>
          <Grid container spacing={3} justify="space-between" alignItems="center">
            <Grid item>
              <Cancel />
            </Grid>
            <Grid item>
              {value.toLocaleString()}
            </Grid>
          </Grid>

        </IconButton>
      </Dialog.Title>
      <Dialog.Content>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <SwipeableViews
              style={{ height: '100%' }}
              index={step}
              onChangeIndex={onStep}
            >
              {steps.map(Step => (
                <Step
                  label={label}
                  format={format}
                  value={value}
                  onChange={onChange}
                  autoOk
                  variant="static"
                  openTo="date"
                />
              ))}
            </SwipeableViews>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
          >
            <MobileStepper
              style={{ width: '100%' }}
              steps={steps.length}
              position="static"
              activeStep={step}
              backButton={
                <Button size="small" onClick={viewDate}>
                  Date
                </Button>
              }
              nextButton={
                <Button size="small" onClick={viewTime}>
                  Time
                </Button>
              }
            />
          </Grid>
        </Grid>
      </Dialog.Content>
      <Dialog.Actions>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={resetSteps}
        >
          Set Date
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default EditDate;

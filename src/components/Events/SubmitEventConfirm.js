import React, { useContext, useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide,
  List, ListItem, ListItemText, Typography, Grid, FormControlLabel, Switch,
} from '@material-ui/core';
import EventContext from './context';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SectionList = ({ data, label }) => {
  return (
    <Grid container spacing={1} direction="column">
      <Grid item>
        <Typography color="secondary">{label}</Typography>
      </Grid>
      <Grid item>
        <List>
          {Object.keys(data).map(key => {
            if (!data[key].length) {
              return null;
            }
            return (
              <ListItem>
                <ListItemText
                  primary={key}
                  secondary={data[key].join(', ')}
                />
              </ListItem>
            )
          })}
        </List>
      </Grid>
    </Grid>
  )
};

const SubmitEventConfirm = ({ open, onClose, onCancel }) => {
  const {
    state, success, outside,
    onToggleSuccess, onToggleOutside
  } = useContext(EventContext);
  return (
    <React.Fragment>
      <Dialog
        transitionDuration={400}
        TransitionComponent={Transition}
        fullScreen
        open={open}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          Confirm Selection
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You Have Selected the following options
          </DialogContentText>
          {Object.keys(state).map(key => (
            <SectionList data={state[key]} label={key} />
          ))}
        </DialogContent>
        <DialogActions>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={12} container>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={success}
                      onChange={onToggleSuccess}
                      name="success"
                    />
                  }
                  label="Success"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={outside}
                      onChange={onToggleOutside}
                      name="outside"
                    />
                  }
                  label="Outside"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={6}>
                <Button
                  onClick={onCancel}
                  color="primary"
                  fullWidth
                  variant="outlined"
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={onClose}
                  color="secondary"
                  fullWidth
                  variant="outlined"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default SubmitEventConfirm;

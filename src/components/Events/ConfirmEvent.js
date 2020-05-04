import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography
} from '@material-ui/core';
import {Close, Delete} from '@material-ui/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmEvent = ({
  open,
  onCancel,
  onDelete,
  onSubmit,
  category,
  value,
  children,
  isDeletable,
}) => {
  return (
    <Dialog
      transitionDuration={400}
      TransitionComponent={Transition}
      fullScreen
      open={open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle>
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={3}>
              <IconButton
                onClick={onCancel}
              >
                <Close />
              </IconButton>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h4">
                {category}
              </Typography>
              <Typography>
                {value}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              {isDeletable && (
                <IconButton onClick={onDelete}>
                  <Delete />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          onClick={onSubmit}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmEvent;

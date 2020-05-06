import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
} from '@material-ui/core';

import { SlideIn, ZoomIn, GrowIn, FadeIn } from '../Transitions';

const getAnimation = animate => {
  switch (animate) {
    case 'zoom':
      return ZoomIn;
    case 'grow':
      return GrowIn;
    case 'fade':
      return FadeIn;
    default:
      return SlideIn;
  }
};

const FullScreenDialog = ({ children, animation, open, duration }) => (
  <Dialog
    transitionDuration={duration}
    TransitionComponent={getAnimation(animation)}
    fullScreen
    open={open}
    aria-labelledby="max-width-dialog-title"
  >
    {children}
  </Dialog>
);

FullScreenDialog.defaultProps = {
  duration: 600,
  animation: 'slide',
};

FullScreenDialog.Title = DialogTitle;
FullScreenDialog.Content = DialogContent;
FullScreenDialog.Actions = DialogActions;

export default FullScreenDialog;

import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Slide, Fade, Grow, Zoom,
} from '@material-ui/core';

const SlideIn = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FadeIn = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

const GrowIn = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const ZoomIn = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

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

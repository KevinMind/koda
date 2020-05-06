import React from 'react';
import {Fade, Grow, Slide, Zoom} from '@material-ui/core';

export const SlideIn = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FadeIn = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

export const GrowIn = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

export const ZoomIn = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

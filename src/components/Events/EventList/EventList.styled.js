import { Box, Avatar as MuiAvatar, styled } from '@material-ui/core';

export const Avatar = styled(MuiAvatar)(({ color }) => ({
  background: color[900],
}));

export const SwipeContent = styled(Box)(({ color, edge }) => ({
  background: color,
  color: 'white',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justify: `flex-${edge}`
}));

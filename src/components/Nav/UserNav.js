import React from 'react';

import * as Styled from './UserNav.styled';

const MenuItem = ({ Icon, children, ...props }) => (
  <Styled.MenuItem {...props}>
    {Icon && <Icon />}
    {children}
  </Styled.MenuItem>
);

const FabItem = ({ Icon, ...props }) => (
  <Styled.FabItem {...props}>
    <Icon />
  </Styled.FabItem>
);

const BottomNav = ({
  children
}) => {
  return (
    <Styled.Container>
      <Styled.Inner>
        {React.Children.map(children, (child) => {
          if (child?.type === FabItem) {
            return (
              <>
                {child}
                <Styled.Spacer />
              </>
            )
          }
          return child;
        })}
      </Styled.Inner>
    </Styled.Container>
  );
};

BottomNav.Item = MenuItem;
BottomNav.Space = Styled.Spacer;
BottomNav.Fab = FabItem;

export default BottomNav;

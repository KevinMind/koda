import React from 'react';
import { Redirect } from '@reach/router';
import { AppUser } from '../Auth';

export default (Component) => {
  class PrivateRoute extends React.PureComponent {
    render() {
      const { isLoggedIn } = AppUser;
      if (!isLoggedIn()) {
        return <Redirect to="/signin" noThrow />;
      }
      return (
        <Component {...this.props} />
      );
    }
  }
  return PrivateRoute;
};

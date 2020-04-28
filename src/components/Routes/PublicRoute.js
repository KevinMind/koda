import React from 'react';
import { Redirect } from '@reach/router';
import { AppUser } from '../Auth';
import { Layout } from '../Layout';

export default (Component) => {
  class PublicRoute extends React.PureComponent {
    render() {
      const { isLoggedIn } = AppUser;
      if (isLoggedIn()) {
        return <Redirect to="/home" noThrow />;
      }
      return (
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...this.props} />
        </Layout>
      );
    }
  }
  return PublicRoute;
};

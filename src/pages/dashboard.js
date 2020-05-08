import React from 'react';
import { navigate } from '@reach/router';
import {Add, List as ListIcon, MoreVert} from '@material-ui/icons';
import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { UserNav } from '../components/Nav';

const DashboardPage = () => {
  return (
    <Layout>
      <Layout.Content height={90}>
        Dashboard
      </Layout.Content>
      <Layout.Content height={10}>
        <UserNav>
          <UserNav.Item
            Icon={ListIcon}
            edge="start"
            onClick={() => navigate('/events')}
          />
          <UserNav.Fab
            Icon={Add}
            onClick={() => navigate('/events/add')}
          />
          <UserNav.Item
            Icon={MoreVert}
            edge="end"
            onClick={() => navigate('/')}
          />
        </UserNav>
      </Layout.Content>
    </Layout>
  );
};

export default withPrivateRoute(DashboardPage);

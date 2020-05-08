import React from 'react';
import { navigate } from '@reach/router';
import { Add, Home, CalendarToday } from '@material-ui/icons';
import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { CalendarDateSelect, CalendarDayView } from '../components/Calendar';
import { UserNav } from '../components/Nav';

const IndexPage = () => {
  return (
    <Layout>
      <Layout.Content height={90}>
        <CalendarDayView />
      </Layout.Content>
      <Layout.Content height={10}>
        <UserNav>
          <UserNav.Item
            Icon={Home}
            onClick={() => navigate('/')}
          />
          <UserNav.Item
            Icon={CalendarToday}
            onClick={() => navigate('/view')}
          />
        </UserNav>
      </Layout.Content>
    </Layout>
  );
};

export default withPrivateRoute(IndexPage);

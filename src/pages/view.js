import React from 'react';
import { navigate } from '@reach/router';
import { Home, CalendarToday } from '@material-ui/icons';
import Layout from '../components/Layout';
import withPrivateRoute from '../components/Routes/PrivateRoute';
import { CalendarDayView } from '../components/Calendar';
import { UserNav } from '../components/Nav';

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout
        Footer={
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
        }
      >
        <Layout.Content>
          <CalendarDayView />
        </Layout.Content>
      </Layout>
    </React.Fragment>
  );
};

export default withPrivateRoute(IndexPage);

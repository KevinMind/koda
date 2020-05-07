import React, { useState } from 'react';
import { MoreVert, List } from '@material-ui/icons';
import { Button, CircularProgress } from '@material-ui/core';
import { navigate } from '@reach/router';
import { createLog } from '../../services/log';
import withPrivateRoute from '../../components/Routes/PrivateRoute';
import Tabs from '../../components/Tabs/Tabs';
import Layout from '../../components/Layout';
import { Data, Categories } from '../../components/Events/data';
import EventContext from '../../components/Events/context';
import { UserNav } from '../../components/Nav';
import { GrowIn } from '../../components/Transitions';
import { EventTabItems, EventTabContent } from '../../components/Events/EventTabs';

const Events = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState([]);
  const [canSubmit, setCanSubmit] = useState(false);

  const submitForm = () => {
    setLoading(true);
    const list = [];
    form.forEach(item => {
      const { selected, note, ...rest } = item.state;
      const payload = {
        category: item.category,
        value: item.value,
        ...rest,
      };

      if (note.length) {
        payload.note = note;
      }
      list.push(createLog(payload))
    });
    Promise.all(list)
      .then(() => {
        setLoading(false);
        setForm([]);
      })
  };

  return (
    <EventContext.Provider value={{
      Data,
      Categories,
      form,
    }}>
      <Layout>
        <Tabs>
          {({ tab, selectTab }) => (
            <React.Fragment>
              <Layout.Content height={15}>
                <Tabs.Header>
                  <EventTabItems tab={tab} selectTab={selectTab} />
                </Tabs.Header>
              </Layout.Content>
              <Layout.Content height={75}>
                <Tabs.Content>
                  <EventTabContent tab={tab} selectTab={selectTab}>
                    {Categories.map(cat => (
                      <>
                      <pre>
                        {JSON.stringify(cat, 0, 2)}
                      </pre>
                      <Button onClick={() => setCanSubmit(!canSubmit)}>
                        Toggle: {canSubmit ? 'off' : 'on'}
                      </Button>
                      </>
                    ))}
                  </EventTabContent>
                </Tabs.Content>
              </Layout.Content>
            </React.Fragment>
          )}
        </Tabs>
        <Layout.Content height={10}>
          <UserNav>
            <UserNav.Item
              Icon={List}
              edge="start"
              onClick={() => navigate('/events')}
            />
            <UserNav.Space />
            <GrowIn in={canSubmit}>
              <Button
                size="large"
                disabled={loading}
                onClick={submitForm}
                variant="contained"
                color="secondary"
                startIcon={loading && (
                  <CircularProgress
                    thickness={3}
                    style={{
                      height: 20,
                      width: 20,
                      color: 'white',
                    }}
                  />
                )}
              >
                Done {form.length > 0 && `(${form.length})`}
              </Button>
            </GrowIn>
            <UserNav.Space />
            <UserNav.Item
              Icon={MoreVert}
              edge="end"
              onClick={() => navigate('/')}
            />
          </UserNav>
        </Layout.Content>
      </Layout>
    </EventContext.Provider>
  );
};

export default withPrivateRoute(Events);

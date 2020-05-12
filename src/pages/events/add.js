import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import {MoreVert, List, CalendarToday } from '@material-ui/icons';
import { Button, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { navigate } from '@reach/router';
import { createLog } from '../../services/log';
import withPrivateRoute from '../../components/Routes/PrivateRoute';
import Tabs from '../../components/Tabs/Tabs';
import Layout from '../../components/Layout';
import { Categories } from '../../components/Events/data';
import { UserNav } from '../../components/Nav';
import { GrowIn } from '../../components/Transitions';
import { EventTabList, EventTabItem, EventTabContent } from '../../components/Events/EventTabs';
import AddEvent from '../../components/Events/AddEvent';
import AddEventForm from '../../components/Events/AddEvent/AddEventForm';
import SelectedEvent from '../../components/Events/AddEvent/SelectedEvent';

const Events = () => {
  const [alerts, setAlerts] = useState([]);
  const [form, setForm] = useState([]);
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);

  const handleClose = (id) => (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    const list = [...alerts];
    const idx = list.findIndex(a => a.id === id);
    list.splice(idx, 1);
    console.log({ list, alerts });
    setAlerts(list);
  };

  const addAlert = (msg, severity) => {
    const id = uuid();
    const close = handleClose(id);
    setAlerts([...alerts, {
      id,
      severity,
      ...msg,
    }]);
    setTimeout(close, 3000);
  };

  const editItem = item => setItem(item);

  const cancelItem = () => setItem();

  const addItem = (payload) => {
    const idx = form.findIndex(i => item.value === i.value);
    const list = [...form];
    if (idx === -1) {
      list.push({
        ...item,
        ...payload,
      });
    } else {
      list.splice(idx, 1, {
        ...item,
        ...payload,
      })
    }
    setForm(list);
    cancelItem();
  };

  const removeItem = (item) => {
    const idx = form.findIndex(i => item.value === i.value);
    const list = [...form];
    if (idx > -1) {
      list.splice(idx, 1);
      setForm(list);
    }
    cancelItem();
  };

  const submitForm = () => {
    setLoading(true);
    const list = form.map(item => createLog({
      value: item.value,
      category: item.category,
      start: item.start,
      end: item.end,
      success: item.success,
      outside: item.outside,
      note: item.note,
    }));
    Promise.all(list)
      .then((result) => {
        addAlert({ message: 'success' }, 'success');
        setTimeout(() => {
          setForm([]);
        }, 300);
      })
      .catch(({ errors }) => {
        errors.forEach((e) => {
          addAlert(e, 'error');
        });
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const canSubmit = form.length > 0;
  return (
      <Tabs>
        {({ tab, selectTab }) => {
          return (
            <Layout
              Header={
                <EventTabList tab={tab} selectTab={selectTab}>
                  {Categories.map((category, index) => {
                    return (
                      <EventTabItem
                        selectTab={selectTab}
                        category={category}
                        index={index}
                        selected={tab === index}
                        count={form.filter(item => item.category === category.label).length}
                      />
                    )
                  })}
                </EventTabList>
              }
              Footer={
                <UserNav>
                  <UserNav.Item
                    Icon={List}
                    edge="start"
                    onClick={() => navigate('/events')}
                  />
                  <UserNav.Space />
                  <GrowIn in={canSubmit && !item}>
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
                      Done {`(${form.length})`}
                    </Button>
                  </GrowIn>
                  <UserNav.Space />
                  <UserNav.Item
                    Icon={CalendarToday}
                    edge="start"
                    onClick={() => navigate('/dashboard')}
                  />
                  <UserNav.Item
                    Icon={MoreVert}
                    edge="end"
                    onClick={() => navigate('/')}
                  />
                </UserNav>
              }
            >
              {alerts.map(({ message, severity, id }) => (
                <Snackbar
                  key={id}
                  open
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <Alert onClose={handleClose(id)} severity={severity}>
                    {message}
                  </Alert>
                </Snackbar>
              ))}
              <Layout.Content style={{ borderTop: !!item && '1px solid red' }}>
                {item && (
                  <AddEventForm
                    onFinish={addItem}
                    onRemove={removeItem}
                    onCancel={cancelItem}
                    data={form.find(({ value }) => value === item.value)}
                    item={item}
                    category={Categories.find(c => c.label === item.category)}
                  />
                )}
                <EventTabContent tab={tab} selectTab={(...args) => {
                  cancelItem();
                  selectTab(...args);
                }} disabled={!!item}>
                  {Categories
                    .map(cat => (
                      <AddEvent
                        color={cat.color}
                        label={cat.label}
                        selectedId={item?.id}
                      >
                        {(i, p) => {
                          const idx = form.findIndex(({ value }) => value === i.value);
                          return (
                            <SelectedEvent
                              onSelect={() => editItem(i)}
                              color={p.color}
                              item={i}
                              data={form[idx]}
                              selected={idx > -1}
                            />
                          )
                        }}
                      </AddEvent>
                    ))}
                </EventTabContent>
              </Layout.Content>
            </Layout>
          )
        }}
      </Tabs>
  );
};

export default withPrivateRoute(Events);

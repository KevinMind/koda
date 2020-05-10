import React, { useState } from 'react';
import {MoreVert, List, CalendarToday, Add, Done, OutdoorGrill, Delete } from '@material-ui/icons';
import {
  Button, CircularProgress, Grid, Toolbar, Switch, FormControl, FormLabel,
} from '@material-ui/core';
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
import * as Styled from '../../components/Events/AddEvent/AddEvent.styled';

const Chips = ({ children }) => (
  <Styled.OptionContent>
    {React.Children.map(children, (child) => (
      <div style={{ marginRight: 5 }}>
        {child}
      </div>
    ))}
  </Styled.OptionContent>
);

const SelectedEvent = ({ item, data, onChange, color }) => {
  const idx = data.findIndex(entry => entry.value === item.value);
  const selected = idx > -1;
  const [success, setSuccess] = useState(false);
  const [outside, setOutside] = useState(false);

  if (selected) {
    return (
      <Styled.SelectedContainer
        color={color}
        selected={selected}
      >
        <Styled.RemoveIcon onClick={() => onChange(item, idx)}>
          <Delete color="white" />
        </Styled.RemoveIcon>
        <Styled.SelectedInner>
          <Styled.SelectedLeft>
            <Styled.OptionIcon>
              <Add />
            </Styled.OptionIcon>
            <Styled.SelectedTitle>
              {item.label}
            </Styled.SelectedTitle>
          </Styled.SelectedLeft>
          <Styled.SelectedRight>
            <FormControl fullWidth>
              <FormLabel><Done /></FormLabel>
              <Switch
                color="primary"
                checked={success}
                onChange={() => setSuccess(!success)}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel><OutdoorGrill /></FormLabel>
              <Switch
                color="primary"
                checked={outside}
                onChange={() => setOutside(!outside)}
              />
            </FormControl>
          </Styled.SelectedRight>
        </Styled.SelectedInner>
      </Styled.SelectedContainer>
    )
  }

  return (
    <Styled.OptionContainer
      color={color}
      selected={selected}
      onClick={() => onChange(item, idx)}
    >
      <Styled.OptionInner>
        <Styled.OptionIcon>
          <Add />
        </Styled.OptionIcon>
        <Styled.OptionTitle color={color}>
          {item.label}
        </Styled.OptionTitle>
      </Styled.OptionInner>
    </Styled.OptionContainer>
  );
};

const Events = () => {
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [outside, setOutside] = useState(false);

  const toggleSelected = (item, idx) => {
    const newSelected = [...selected];
    if (idx === -1) {
      newSelected.push(item);
    } else {
      newSelected.splice(idx, 1);
    }
    setSelected(newSelected);
  };

  const submitForm = () => {
    setLoading(true);
    const list = selected.map(item => createLog({
      category: item.category,
      value: item.value,
      start: new Date(),
      end: new Date(),
      success,
      outside,
    }));
    Promise.all(list)
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          setSelected([]);
        }, 300);
      })
  };

  const canSubmit = selected.length > 0;
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
                        count={selected.filter(item => item.category === category.label).length}
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
                      Done {`(${selected.length})`}
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
              <Layout.Content>
                <EventTabContent tab={tab} selectTab={selectTab}>
                  {Categories
                    .map(cat => (
                      <AddEvent
                        color={cat.color}
                        data={selected}
                        label={cat.label}
                        onChange={toggleSelected}
                      >
                        {(item, itemProps) => {
                          console.log({ item, itemProps });
                          return (
                            <SelectedEvent
                              color={itemProps.color}
                              item={item}
                              data={selected}
                              onChange={toggleSelected}
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

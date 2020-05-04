import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { createLog } from '../../services/log';
import withPrivateRoute from '../../components/Routes/PrivateRoute';
import Tabs from '../../components/Tabs/Tabs';
import { Data, Categories } from '../../components/Events/data';
import EventContext from '../../components/Events/context';
import AddEvent from '../../components/Events/AddEvent';
import EventEditForm from '../../components/Events/EditEvent';
import ConfirmEvent from '../../components/Events/ConfirmEvent';

const Events = () => {
  const [category, setCategory] = useState();
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState([]);

  const [curr, setCurr] = useState();

  const handleEditChange = name => value => setCurr({
    ...curr,
    [name]: value,
  });

  const handleOpen = (category, value) => {
    const idx = form.findIndex(item => item.value === value);
    const item = idx > -1 ? form[idx].state : {
      selected: false,
      start: new Date(),
      end: new Date(),
      outside: false,
      success: false,
      note: '',
    };
    setCurr(item);
    setCategory(category);
    setValue(value);
    setOpen(true);
  };

  const handleClose = () => {
    setCurr();
    setCategory();
    setValue();
    setOpen(false);
  };

  const saveForm = () => {
    const item = { category, value, state: { ...curr, selected: true } };
    const data = [...form];
    const idx = form.findIndex(item => item.value === value);

    if (idx === -1) {
      data.push(item);
    } else {
      data.splice(idx, 1, item);
    }

    setForm(data);
    handleClose();
  };

  const clearForm = () => {
    const data = [...form];
    const idx = data.findIndex(item => item.value === value);
    if (idx > -1) {
      data.splice(idx, 1);
      setForm(data);
    }
    handleClose();
  };

  const submitForm = () => {
    const list = [];
    form.forEach(({ value, category, state }) => {
      const { selected, note, ...rest } = state;
      const payload = {
        category,
        value,
        ...rest,
      };

      if (note.length) {
        payload.note = note;
      }
      list.push(createLog(payload))
    });
    Promise.all(list)
      .then(() => {
        handleClose();
        setForm([]);
      })
  };

  const handleChange = category => (value) => {
    return handleOpen(category, value);
  };

  return (
    <EventContext.Provider value={{
      category,
      value,
      Data,
      Categories,
      form,
    }}>
      <ConfirmEvent
        isDeletable={curr && curr.selected || false}
        category={category}
        value={value}
        open={open}
        onCancel={handleClose}
        onDelete={clearForm}
        onSubmit={saveForm}
      >
        {value && (
          <EventEditForm
            onChange={handleEditChange}
            values={curr}
          />
        )}
      </ConfirmEvent>
      <Tabs>
        {Categories.map((category) => (
          <AddEvent
            key={category.label}
            {...category}
            onChange={handleChange(category.label)}
          />
        ))}
      </Tabs>
      <AppBar
        position="fixed"
        style={{ bottom: 0, top: 'auto' }}
        color="transparent"
      >
        <Toolbar>
          <Button
            disable={!form.length}
            onClick={submitForm}
            fullWidth
            variant="contained"
            color="secondary"
          >
            Submit ({form.length}) Items
          </Button>
        </Toolbar>
      </AppBar>
    </EventContext.Provider>
  )
};

export default withPrivateRoute(Events);

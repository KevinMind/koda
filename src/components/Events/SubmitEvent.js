import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import SubmitEventConfirm from './SubmitEventConfirm';
import EventContext from './context';

const SubmitEvent = () => {
  const { onSubmit } = useContext(EventContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleFirstClick = () => setIsOpen(true);
  const handleCancel =() => setIsOpen(false);
  const handleSubmit = () => {
    onSubmit();
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" fullWidth onClick={handleFirstClick} color="secondary">
        Submit Event
      </Button>
      <SubmitEventConfirm
        open={isOpen}
        onClose={handleSubmit}
        onCancel={handleCancel}
      />
    </React.Fragment>
  )
};

export default SubmitEvent;

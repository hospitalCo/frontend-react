import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PhoneRegisterDialog = ({isOpen, handleClose}) => {

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          LOG IN
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please log in to view mobile number of supplier.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PhoneRegisterDialog;

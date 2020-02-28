import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button } from '@material-ui/core';
import React from 'react';

interface Props {
  handleClose?: () => void;
  open?: boolean;
  title?: string;
  text?: string;
  onClick?: () => void;
}

const ConfirmDialog: React.FC<Props> = ({ handleClose, open, title, text, onClick }) => {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick} color="default">
          Cancel
        </Button>
        <Button onClick={handleClose} color="default">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

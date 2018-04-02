import React, { Fragment } from 'react';

import Snackbar from 'material-ui/Snackbar';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import { clearAlert } from '../common/alerter';

export default ({ alert, dialog }) => <Fragment>
  <Snackbar
    open={alert.isOpen}
    message={alert.message}
    autoHideDuration={alert.autoHideDuration}
    onClose={clearAlert}
  />
  <Dialog
    open={dialog.isOpen}>
    <DialogTitle id="alert-dialog-title">{dialog.title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {dialog.content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      {
        dialog.actions.map(({ title, callback }) => <Button key={`db${title}`} color='primary' onClick={callback}>
          {title}
        </Button>)
      }
    </DialogActions>
  </Dialog>
</Fragment>;
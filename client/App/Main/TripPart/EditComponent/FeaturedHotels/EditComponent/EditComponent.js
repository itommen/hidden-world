import React, { Component } from 'react';

import Dialog, { DialogTitle, DialogActions, DialogContent } from 'material-ui/Dialog';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { TextField, Select } from 'redux-form-material-ui';
import Button from 'material-ui/Button';

import { Flex } from 'reflexbox';

import { reduxForm, Field } from 'redux-form';

import validate from '~/common/validators/newFeaturedHotel';

import StarsRate from '../StarsRate';

const FORM_NAME = 'feturedHotelForm';
class New extends Component {
  componentWillMount() {
    const { data, initialize } = this.props;

    if (data) {
      initialize(data);
    }
  }

  render() {
    const { isOpen, closeDialog, handleSubmit } = this.props;
    return <Dialog
      aria-labelledby='form-dialog-title'
      open={isOpen}>
      <DialogTitle>הוספת מלון</DialogTitle>
      <form>
        <DialogContent>
          <Flex column>
            <Field name='name'
              component={TextField}
              label='שם' />

            <Field name='link'
              component={TextField}
              label='לינק' />

            <FormControl>
              <InputLabel>כוכבים</InputLabel>
              <Field name='stars'
                component={Select}>
                {[1, 2, 3, 4, 5].map(x => <MenuItem key={`item${x}`} value={x}>
                  <StarsRate rate={x} />
                </MenuItem>)}
              </Field>
            </FormControl>
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={closeDialog}>
            בטל
          </Button>
          <Button
            onClick={handleSubmit}
            raised
            name='save'
            color='primary'>
            שמור
          </Button>
        </DialogActions>
      </form>
    </Dialog>;
  }
}

export const formName = FORM_NAME;
export default reduxForm({
  form: FORM_NAME,
  validate,
  initialValues: {
    stars: 3
  }
})(New);

import React from 'react';

import { Field } from 'redux-form';

import { TextField } from 'redux-form-material-ui';

export default () => <Field name='description'
  component={TextField}
  label='תיאור'
  multiline={true}
  rows={25}
  fullWidth={true} />;

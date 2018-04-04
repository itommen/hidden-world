import React from 'react';
import { Field } from 'redux-form';

import ReactQuill from './ReduxFormQuill';

export default () => <Field name='description'
  component={ReactQuill} />;

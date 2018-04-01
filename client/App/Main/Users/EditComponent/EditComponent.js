import React from 'react';

import { Flex } from 'reflexbox';
import { reduxForm } from 'redux-form';

import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import validate from '~/common/validators/user';

const EditComponent = ({ handleSubmit }) => <Flex column justify='center' align='right'>
  <Typography type='display3'>הוספת משתמש</Typography>
  <form onSubmit={handleSubmit}>
    <Flex column auto justify='space-around'>
      <Field name='userName'
        component={TextField}
        label='שם משתמש' />

      <Field name='password'
        component={TextField}
        label='סיסמא' />

      {/* TODO: retype password  */}

      <Field name='email'
        component={TextField}
        label='אימייל' />

      <Field name='firstName'
        component={TextField}
        label='שם פרטי' />

      <Field name='lastName'
        component={TextField}
        label='שם משפחה' />

      <Button
        raised
        type='submit'
        name='login'
        color='primary'>
        התחבר
      </Button>
    </Flex>
  </form>
</Flex>;

export default reduxForm({
  form: 'editUserForm',  
  validate,  
})(EditComponent);
import React from 'react';
import Button from 'material-ui/Button';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { Flex } from 'reflexbox';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import validate from '~/common/validators/login';

const LoginForm = ({ handleSubmit }) => <Flex column auto justify='center' align='center'>
  <form onSubmit={handleSubmit}>
    <Card>
      <CardHeader title={'התחבר'} subheader='' />
      <CardContent>
        <Flex column auto>
          <Field name='userName'
            component={TextField}
            label='שם משתמש' />

          <Field name='password'
            component={TextField}
            label='סיסמא' />
        </Flex>
      </CardContent>
      <CardActions>
        <Flex column auto align='center'>
          <Button
            raised
            type='submit'
            name='login'
            color='primary'>
            התחבר
          </Button>
        </Flex>
      </CardActions>
    </Card>
  </form>
</Flex>;

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);

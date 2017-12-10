import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { Flex } from 'reflexbox';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import validate from '~/common/validators/login';

// TODO: maybe use it when waiting for login
// import CircularProgress from 'material-ui/CircularProgress';

class LoginForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return <Flex column auto justify='center' align='center'>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardTitle title={'התחבר'} />
          <CardText>
            <Flex column auto>
              <Field name='userName'
                component={TextField}
                floatingLabelText='שם משתמש' />

              <Field name='password'
                component={TextField}
                floatingLabelText='סיסמא' />
            </Flex>
          </CardText>
          <CardActions>
            <Flex column auto align='center'>
              <RaisedButton
                type='submit'
                name={'login'}
                label={'התחבר'}
                primary={true} />
            </Flex>
          </CardActions>
        </Card>
      </form>
    </Flex>;
  }
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);

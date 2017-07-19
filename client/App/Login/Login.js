import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { Flex } from 'reflexbox';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from '../common/redux-form-inputs/TextField';
import PasswordField from 'material-ui-password-field';


// TODO: maybe use it when waiting for login
// import CircularProgress from 'material-ui/CircularProgress';

class LoginForm extends React.Component {
  componentDidMount() {

  }

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
                label='שם משתמש' />

                <Field name='password'
                component={TextField}
                label='סיסמא' />
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
  initialValues: {
    userName: '',
    password: ''
  }
})(LoginForm);

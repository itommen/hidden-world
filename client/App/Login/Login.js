import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { Flex } from 'reflexbox';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

// TODO: maybe use it when waiting for login
// import CircularProgress from 'material-ui/CircularProgress';

class LoginForm extends React.Component {  
  render() {
    const {handleSubmit} = this.props;
    
    return <Flex>
      <form onSubmit={handleSubmit}>
        <Field
          name='test1'
          component='input'
          type='text'
        />

        <Field
          name='test2'
          component='input'
          type='text'
        />

        <input type='submit' value='submit' />
      </form>
    </Flex>;
  };
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm);

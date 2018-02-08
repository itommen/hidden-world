import { connect } from 'react-redux';
import { compose } from 'recompose';

import alerter from '../common/alerter';

import Login from './Login';
import { login as loginAction } from './redux';

export default compose(
  connect(
    () => ({}),
    dispath => ({
      onSubmit: async function (data) {
        const { error } = await dispath(loginAction(data));
        if (!error) {
          return;
        }

        alerter({
          message: error.response.status === 404
            ? 'Login failed. Username or password is inncorect'
            : 'Login failed. Something happened durring login, please try again later'
        });
      }
    })
  )
)(Login);

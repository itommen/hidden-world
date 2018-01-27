import { connect } from 'react-redux';

import alerter from '../common/alerter';

import Login from './Login';
import { login as loginAction } from './redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispath => ({
  onSubmit: async function (data) {
    const { error } = await dispath(loginAction(data))
    if (!error) {
      return;
    }

    alerter({
      message: error.response.status === 404
        ? 'Login failed. Username or password is inncorect'
        : 'Login failed. Something happened durring login, please try again later'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

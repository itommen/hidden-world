import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Login from './Login';
import { login as loginAction } from './redux';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispath => ({
  onSubmit: data => {
    dispath(loginAction(data))
      .then(() => {
        dispath(push('/'));
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

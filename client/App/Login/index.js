import { connect } from 'react-redux';

import Login from './Login';
import { login as loginAction } from './redux';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispath => ({
  onSubmit: data => {
    dispath(loginAction(data))
      .then(x => {
        debugger;
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

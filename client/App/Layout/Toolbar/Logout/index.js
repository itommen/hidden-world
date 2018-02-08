import { logout } from '../../../../common/auth/redux';

import { connect } from 'react-redux';
import { compose } from 'recompose';

import Logout from './Logout';

export default compose(
  connect(
    () => ({}),
    dispath => ({
      logout: () => dispath(logout)
    })
  )
)(Logout);

import { logout } from '../../../../common/auth/redux';

import { connect } from 'react-redux';

import Logout from './Logout';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispath) => ({
  logout: () => dispath(logout)
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

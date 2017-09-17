import { logout } from '../../../../common/auth/redux';

import { connect } from 'react-redux';

import Layout from './Logout';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispath) => ({
  logout: () => dispath(logout)
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

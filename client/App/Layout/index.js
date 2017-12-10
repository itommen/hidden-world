import { connect } from 'react-redux';

import stateValidator from '../common/state-validator';

import './layout.less';
import Layout from './Layout';

const mapStateToProps = ({ auth: { isAutorized }, alert }) => ({
  isAutorized,
  alert
});

const mapDispatchToProps = () => ({
  stateValidator
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

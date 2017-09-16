import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import stateValidator from '../common/state-validator';

import Layout from './Layout';

const mapStateToProps = ({ auth: { isAutorized } }) => ({
  isAutorized
});

const mapDispatchToProps = (dispath) => ({
  stateValidator
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

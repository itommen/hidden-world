import { connect } from 'react-redux';

import stateValidator from '../common/state-validator';

import { compose, lifecycle } from 'recompose';

import './layout.less';
import Layout from './Layout';

export default compose(
  connect(
    ({ auth: { isAutorized }, alert, dialog }) => ({ isAutorized, alert, dialog }),
    () => ({})
  ),
  lifecycle({
    componentWillUpdate() {
      stateValidator();
    },
    componentWillMount() {
      stateValidator();
    }
  })
)(Layout);

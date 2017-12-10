import { connect } from 'react-redux';
import { difference } from 'lodash';

import alerter from '../../common/alerter';

import ManageCountries from './ManageCountries';

import { addCountries, removeCountries } from './redux';

const mapStateToProps = ({ countries }) => {
  const { all = [], relevant = [], loading } = countries;

  return {
    loading,
    relevant,
    notRelevant: difference(all, relevant)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCountries: countries => dispatch(addCountries(countries))
      .then(({ error }) => alerter({
        message: error
          ? 'add countries failed'
          : 'add countries succsed'
      })),
    removeCountries: countries => dispatch(removeCountries(countries))
      .then(({ error }) => alerter({
        message: error
          ? 'remove countries failed'
          : 'remove countries succsed'
      }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCountries);

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

const mapDispatchToProps = (dispatch) => ({
  addCountries: async function (countries) {
    const { error } = await dispatch(addCountries(countries));
    alerter({
      message: error
        ? 'add countries failed'
        : 'add countries succsed'
    });
  },
  removeCountries: async function (countries) {
    const { error } = await dispatch(removeCountries(countries));
    alerter({
      message: error
        ? 'remove countries failed'
        : 'remove countries succsed'
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCountries);

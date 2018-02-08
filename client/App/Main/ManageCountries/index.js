import { connect } from 'react-redux';
import { compose } from 'recompose';
import { difference } from 'lodash';

import alerter from '../../common/alerter';

import ManageCountries from './ManageCountries';

import { addCountries, removeCountries } from './redux';

export default compose(
  connect(
    ({ countries: { all = [], relevant = [], loading } }) => ({
      loading,
      relevant,
      notRelevant: difference(all, relevant)
    }),
    dispatch => ({
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
    })
  )
)(ManageCountries);

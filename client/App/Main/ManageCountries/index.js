import { connect } from 'react-redux';
import { difference } from 'lodash';

import ManageCountries from './ManageCountries';

import { loadCountries, addCountries, removeCountries } from './redux';

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
    loadCountries: () => dispatch(loadCountries()),
    addCountries: countries => dispatch(addCountries(countries)),
    removeCountries: countries => dispatch(removeCountries(countries))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCountries);

import { store } from '../../common/store';

import { loadCountries } from './ManageCountries/redux';

export default function () {
  const { dispatch } = store;

  dispatch(loadCountries());
}

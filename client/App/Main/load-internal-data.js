import { store } from '../../common/store';

import { loadCountries } from './ManageCountries/redux';

import alerter from '../common/alerter';

export default async function () {
  const { dispatch } = store;

  const { error } = await dispatch(loadCountries());
  if (error) {
    alerter({ message: 'loading countries failed' });
  }
}

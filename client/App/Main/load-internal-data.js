import { store } from '../../common/store';

import { loadCountries } from './ManageCountries/redux';

import alerter from '../common/alerter';

export default function () {
  const { dispatch } = store;

  dispatch(loadCountries())
    .then(({ error }) => {
      if (error) {
        alerter({ message: 'loading countries failed' });
      }
    });
}

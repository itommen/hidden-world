import { push } from 'react-router-redux';

import { store } from '../../../common/store';

export default function (state) {
  const { dispatch } = store;
  dispatch(push(state));
}

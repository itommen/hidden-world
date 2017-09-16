import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';

import { store } from '../../../common/store';

const nonUserStates = ['/login'];
const commonStates = [];

const defaultUserState = '/';
const defaultGuestState = '/login';

export default function () {
  const { pathname } = browserHistory.getCurrentLocation();
  const { getState, dispatch } = store;
  const { auth: { isAutorized } } = getState();

  if (isAutorized && nonUserStates.some(x => pathname.startsWith(x))) {
    dispatch(push(defaultUserState));
  }

  if (!isAutorized && !nonUserStates.some(x => pathname.startsWith(x))) {
    dispatch(push(defaultGuestState));
  }
}
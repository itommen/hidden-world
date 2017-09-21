import { browserHistory } from 'react-router';

import { store } from '../../../common/store';
import redirect from '../navigation';

const nonUserStates = ['/login'];

const defaultUserState = '/';
const defaultGuestState = '/login';

export default function () {
  const { pathname } = browserHistory.getCurrentLocation();
  const { getState } = store;
  const { auth: { isAutorized } } = getState();

  if (isAutorized && nonUserStates.some(x => pathname.startsWith(x))) {
    redirect(defaultUserState);
  }

  if (!isAutorized && !nonUserStates.some(x => pathname.startsWith(x))) {
    redirect(defaultGuestState);
  }
}

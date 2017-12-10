import { resolve, reject } from 'redux-simple-promise';
import { createAction } from 'redux-actions';

import { LOGIN_ACTION } from '../../App/Login/redux';
import { setUserToken, getUserToken, clearUserToken } from '../../common/auth/user-token';

export const AUTH_ACTION = 'AUTH';
export const LOGOUT_ACTION = 'LOGOUT';

export const AuthState = {
  waiting: 0,
  started: 1,
  finished: 2
};

const internalState = {
  isAutorized: false,
  authState: AuthState.waiting,
  token: getUserToken()
};

export default (state = internalState, { type, payload }) => {
  switch (type) {
    case resolve(LOGIN_ACTION): {
      const { data: { token } } = payload;

      setUserToken(token);
      return { ...state, isAutorized: true, authState: AuthState.finished, token };
    }
    case AUTH_ACTION: {
      return ({ ...state, authState: AuthState.started });
    }
    case resolve(AUTH_ACTION): {
      return { ...state, isAutorized: true, authState: AuthState.finished };
    }
    case reject(AUTH_ACTION): {
      return { ...state, isAutorized: false, authState: AuthState.finished };
    }
    case LOGOUT_ACTION: {
      clearUserToken();
      return { ...state, token: null, isAutorized: false };
    }
    default: {
      return state;
    }
  }
};

export const auth = createAction(AUTH_ACTION, () => ({
  request: {
    url: '/user/auth',
    method: 'POST'
  }
}));

export const logout = {
  type: LOGOUT_ACTION
};

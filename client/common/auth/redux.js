import { resolve, reject } from 'redux-simple-promise';
import { createAction } from 'redux-actions';

import { LOGIN_ACTION } from '../../App/Login/redux';
import { setUserToken, getUserToken } from '../../common/auth/user-token';

export const AUTH_ACTION = 'AUTH';

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
      const { data: { token, user } } = payload;

      setUserToken(token);
      return Object.assign({}, state, {
        isAutorized: true,
        authState: AuthState.finished,
        token
      });
    }
    case reject(LOGIN_ACTION): {
      
    }
    case AUTH_ACTION: {
      return Object.assign({}, state, {
        authState: AuthState.started,
      })
    }    
    case resolve(AUTH_ACTION): {
      console.log('auth sucssed');
      return Object.assign({}, state, {
        isAutorized: true,
        authState: AuthState.finished
      });
    }
    case reject(AUTH_ACTION): {
      console.log('auth failed');
      return Object.assign({}, state, {
        isAutorized: false,
        authState: AuthState.finished
      });
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
}))

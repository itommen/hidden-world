import { resolve } from 'redux-simple-promise';

import { LOGIN_ACTION } from '../../App/Login/redux';
import { setUserToken } from '../../common/auth/user-token';

export const AUTH_ACTION = 'AUTH';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case resolve(LOGIN_ACTION): {
      const { data: { token, user } } = payload;

      debugger;
      setUserToken(token);
      return Object.assign({}, state, {
        token
      });
    }
    default: {
      return state;
    }
  }
};

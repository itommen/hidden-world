import { reject, resolve } from 'redux-simple-promise';
import { createAction } from 'redux-actions';

export const LOGIN_ACTION = 'LOGIN';

export default (state = {}, { type, payload, error }) => {
  switch (type) {
    case LOGIN_ACTION: {
      console.log('login started');

      return state;
    }

    case reject(LOGIN_ACTION): {
      const { response: { status } } = error;
      console.log('login failed');
      debugger;

      return state;
    }

    default: {
      return state;
    }
  }
};

export const login = createAction(LOGIN_ACTION, ({ userName, password }) => ({
  request: {
    url: '/user/login',
    method: 'POST',
    data: {
      userName,
      password
    }
  }
})
);

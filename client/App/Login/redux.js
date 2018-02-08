import { createAction } from 'redux-actions';

export const LOGIN_ACTION = 'LOGIN';

export default (state = {}, { type }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};

export const login = createAction(LOGIN_ACTION, ({ userName, password } = {}) => ({
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

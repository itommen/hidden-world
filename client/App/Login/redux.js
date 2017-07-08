// import { setUserToken } from '../common/user-token';
import { reject, resolve } from 'redux-simple-promise';
import { createAction } from 'redux-actions';

export const LOGIN_ACTION = 'LOGIN';

export default (state = {}, action) => {
  switch (action.type) {
  case LOGIN_ACTION: {
    console.log('login started');

    return state;
  }

  case resolve(LOGIN_ACTION): {
    console.log('login succsed!');

    return state;
  }

  case reject(LOGIN_ACTION): {
    console.log('login failed');

    return state;
  }

  default: {
    return state;
  }
  }
};

export const login = createAction(LOGIN_ACTION, ({ userName, password }) => ({
  request: {
    url: '/login',
    method: 'POST',
    data: {
      userName,
      password
    }
  }
}));

// export const login = user => dispatch => {
//   return fetch('api/users/login', {
//     method: 'POST',
//     headers,
//     body: JSON.stringify(user)
//   })
//     .then((result) => {
//       if (result.status === 401) {
//         return Promise.reject();
//       }
//       return result.json();
//     })
//     .then(token => {
//       setUserToken(token);
//       dispatch(loginSuccsed());
//     })
//     .catch(() => dispatch(loginFailed()));
// };

import { setUserToken } from '../common/user-token';
import headers from './common-headers';

export const startLogin = () => ({
  type: 'LOGIN_STARTED'
});

export const loginFailed = () => ({
  type: 'LOGIN_FAILED'
});

export const loginSuccsed = () => ({
  type: 'LOGIN_SUCCSED'
});

export const login = user => dispatch => {  
  dispatch(startLogin());
  return fetch('api/users/login', {
    method: 'POST',
    headers,
    body: JSON.stringify(user)
  })
    .then((result) => {
      if (result.status === 401) {
        return Promise.reject();
      }
      return result.json();
    })
    .then(token => {
      setUserToken(token);
      dispatch(loginSuccsed());
    })
    .catch(() => dispatch(loginFailed()));
};
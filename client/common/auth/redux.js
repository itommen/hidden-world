import { reject, resolve } from 'redux-simple-promise';
// import { createAction } from 'redux-actions';

export const AUTH_ACTION = 'AUTH';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case AUTH_ACTION: {
      console.log('auth started');

      return state;
    }

    case resolve(AUTH_ACTION): {
      console.log('auth succsed!');
      return state;
    }

    case reject(AUTH_ACTION): {
      console.log('auth failed');

      return state;
    }

    default: {
      return state;
    }
  }
}
  ;

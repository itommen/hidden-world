import { createAction } from 'redux-actions';
import { resolve, reject } from 'redux-simple-promise';

export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

const internalState = {
  loading: false
};

export default (state = internalState, { type, payload: { data } = {} }) => {
  switch (type) {
    case LOAD_USERS: {
      return { ...state, loading: true };
    }

    case resolve(LOAD_USERS): {
      return { ...state, data, loading: false };
    }

    case reject(LOAD_USERS): {
      return { ...state, loading: false };
    }

    case resolve(ADD_USER): {
      debugger;
      return { ...state };
    }

    case reject(ADD_USER): {
      debugger;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export const loadUsers = createAction(LOAD_USERS, () => ({
  request: {
    url: '/user',
    method: 'GET'
  }
})
);

export const addUser = createAction(ADD_USER, data => ({
  request: {
    url: '/user',
    method: 'POST',
    data
  }
})
);

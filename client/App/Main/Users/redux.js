import { createAction } from 'redux-actions';
import { resolve, reject } from 'redux-simple-promise';

export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';
export const FETCH_USER = 'FETCh_USER';
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

    case resolve(FETCH_USER): {
      const { id } = data;
      return {
        ...state,
        [id]: data
      }
    }

    case reject(FETCH_USER): {
      // TODO: Should alert and redirect back to list
      return { ...state }
    }

    case resolve(ADD_USER): {
      // TODO: Shoud redirect to the user page
      return { ...state };
    }

    case reject(ADD_USER): {
      // TODO: should alert failure
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

export const fetch = createAction(FETCH_USER, id => ({
  request: {
    url: `/user/${id}`,
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

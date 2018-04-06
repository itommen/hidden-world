import { createAction } from 'redux-actions';
import { resolve, reject } from 'redux-simple-promise';

import {
  started as deleteStarted,
  resolved as deleteResolved,
  rejected as deleteRejected
} from '../../common/redux-actions/delete';

export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';
export const FETCH_USER = 'FETCh_USER';
export const REMOVE_USER = 'REMOVE_USER';

const internalState = {
  loading: false,
  deleted: []
};

export default (state = internalState, { type, payload: { data, request } = {}, meta }) => {
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
      };
    }

    case reject(FETCH_USER): {
      // TODO: Should alert and redirect back to list
      return { ...state };
    }

    case resolve(ADD_USER): {
      // TODO: Shoud redirect to the user page
      return { ...state };
    }

    case reject(ADD_USER): {
      // TODO: should alert failure
      return { ...state };
    }

    case REMOVE_USER: {
      return deleteStarted(state, request);
    }

    case resolve(REMOVE_USER): {
      return deleteResolved(state, meta);
    }

    case reject(REMOVE_USER): {
      return deleteRejected(state, meta);
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

export const remove = createAction(REMOVE_USER, id => ({
  request: {
    url: `/user/${id}`,
    method: 'DELETE',
    id
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

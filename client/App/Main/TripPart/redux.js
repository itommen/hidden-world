import { createAction } from 'redux-actions';
import { resolve, reject } from 'redux-simple-promise';

import {
  started as deleteStarted,
  resolved as deleteResolved,
  rejected as deleteRejected
} from '../../common/redux-actions/delete';

// TODO: Change the names of the vars (only vars!) to 'LOAD', 'INSERT' and so on
export const LOAD_TRIP_PARTS = 'LOAD_TRIP_PARTS';
export const INSERT_TRIP_PARTS = 'INSERT_TRIP_PARTS';
export const EDIT_TRIP_PARTS = 'EDIT_TRIP_PARTS';
export const FETH_TRIP_PART = 'FETH_TRIP_PAART';
export const DELETE_TRIP_PART = 'DELETE_TRIP_PART';

const internalState = {
  loading: false,
  data: [],
  deleted: []
};

export default (state = internalState, { type, payload: { data, request } = {}, meta }) => {
  switch (type) {
    case LOAD_TRIP_PARTS: {
      return { ...state, loading: true };
    }

    case resolve(LOAD_TRIP_PARTS): {
      return { ...state, data, loading: false };
    }

    // TODO: add reject

    case resolve(FETH_TRIP_PART): {
      const { id } = data;
      return { ...state, [id]: data };
    }

    // TODO: add reject

    case resolve(INSERT_TRIP_PARTS): {
      return { ...state, data: [...state.data, data] };
    }

    // TODO: add reject

    case DELETE_TRIP_PART: {
      return deleteStarted(state, request);
    }

    case resolve(DELETE_TRIP_PART): {
      return deleteResolved(state, meta);
    }

    case reject(DELETE_TRIP_PART): {
      return deleteRejected(state, meta);
    }

    default: {
      return state;
    }
  }
};

export const loadTripParts = createAction(LOAD_TRIP_PARTS, () => ({
  request: {
    url: '/tripPart',
    method: 'GET'
  }
})
);

export const fetchTripPart = createAction(FETH_TRIP_PART, id => ({
  request: {
    url: `/tripPart/${id}`,
    method: 'GET'
  }
})
);

export const deleteTripPart = createAction(DELETE_TRIP_PART, id => ({
  request: {
    url: `/tripPart/${id}`,
    method: 'DELETE',
    id
  }
})
);

export const insertTripPart = createAction(INSERT_TRIP_PARTS, data => ({
  request: {
    url: '/tripPart',
    method: 'POST',
    data
  },
  client: 'withFiles'
})
);

export const editTripPart = createAction(EDIT_TRIP_PARTS, data => ({
  request: {
    url: '/tripPart',
    method: 'PUT',
    data
  },
  client: 'withFiles'
})
);

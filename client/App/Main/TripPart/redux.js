import { createAction } from 'redux-actions';
import { resolve } from 'redux-simple-promise';

export const LOAD_TRIP_PARTS = 'LOAD_TRIP_PARTS';
export const INSERT_TRIP_PARTS = 'INSERT_TRIP_PARTS';
export const EDIT_TRIP_PARTS = 'EDIT_TRIP_PARTS';
export const FETH_TRIP_PART = 'FETH_TRIP_PAART';

const internalState = {
  loading: false,
  data: []
};

export default (state = internalState, { type, payload: { data } = {} }) => {
  switch (type) {
    case LOAD_TRIP_PARTS: {
      return { ...state, loading: true };
    }

    case resolve(LOAD_TRIP_PARTS): {
      return { ...state, data, loading: false };
    }

    case resolve(FETH_TRIP_PART): {
      const { id } = data;
      return { ...state, [id]: data };
    }

    case resolve(INSERT_TRIP_PARTS): {
      return { ...state, data: [...state.data, data] };
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

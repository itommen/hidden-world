import { createAction } from 'redux-actions';
import { resolve, reject } from 'redux-simple-promise';

import { without } from 'lodash';

// TODO: Change the names of the vars (only vars!) to 'LOAD', 'INSERT' and so on
export const LOAD_TRIP_PARTS = 'LOAD_TRIP_PARTS';
export const INSERT_TRIP_PARTS = 'INSERT_TRIP_PARTS';
export const EDIT_TRIP_PARTS = 'EDIT_TRIP_PARTS';
export const FETH_TRIP_PART = 'FETH_TRIP_PAART';
export const DELETE_TRIP_PART = 'DELETE_TRIP_PART';

const internalState = {
  loading: false,
  data: []
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
      const { id } = request;
      const tripPartToRemove = state.data.find(x => x.id === id);
      const newTripParts = without(state.data, tripPartToRemove);

      return {
        ...state,
        data: newTripParts,
        deleted: [...(state.deleted || []), tripPartToRemove]
      };
    }

    case resolve(DELETE_TRIP_PART): {
      const { previousAction: { payload: { request: { id } } } } = meta;
      const deleted = state.deleted.filter(x => x.id !== id);

      return {
        ...state,
        deleted
      };
    }

    case reject(DELETE_TRIP_PART): {
      const { previousAction: { payload: { request: { id } } } } = meta;
      const removedTripPart = state.deleted.find(x => x.id === id);

      return {
        ...state,
        data: [...(state.data), removedTripPart]
      };
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

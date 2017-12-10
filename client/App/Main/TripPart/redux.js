import { createAction } from 'redux-actions';
import { resolve, reject } from 'redux-simple-promise';

export const LOAD_TRIP_PARTS = 'LOAD_TRIP_PARTS';
export const INSERT_TRIP_PARTS = 'INSERT_TRIP_PARTS';

const internalState = {
  loading: false
};

export default (state = internalState, { type, payload: { data } = {} }) => {
  switch (type) {
    case LOAD_TRIP_PARTS: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case resolve(LOAD_TRIP_PARTS): {
      return Object.assign({}, state, {
        data,
        loading: false
      });
    }

    case resolve(INSERT_TRIP_PARTS): {
      // TODO: should alert that the insertation succsed
      return { ...state, data: [...state.data, data] };
    };


    case reject(INSERT_TRIP_PARTS): {
      // TODO: should alert that the insert failed!
      return state;
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

export const insertTripPart = createAction(INSERT_TRIP_PARTS, data => ({
  request: {
    url: '/tripPart',
    method: 'POST',
    data
  }
})
);

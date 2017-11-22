import { createAction } from 'redux-actions';
import { resolve, reject } from 'redux-simple-promise';

export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
export const ADD_COUNTRIES = 'ADD_COUNTRIES';
export const REMOVE_COUNTRIES = 'REMOVE_COUTRIES';

const internalState = {
  loading: false
};

const getStateAfterAddCountries = (state, countries) => Object.assign({}, state, {
  relevant: state.relevant.concat(countries)
});

const getStateAfterRemoveCountries = (state, countries) => Object.assign({}, state, {
  relevant: state.relevant.filter(x => !countries.includes(x))
});

export default (state = internalState, { type, payload, meta }) => {
  switch (type) {
    case LOAD_COUNTRIES: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case resolve(LOAD_COUNTRIES): {
      const { data: { all, relevant } } = payload;

      return Object.assign({}, state, {
        all,
        relevant,
        loading: false
      });
    }

    case reject(LOAD_COUNTRIES): {
      // TODO: maybe should alert about the loading problem
      return Object.assign({}, state, {
        loading: false
      });
    }

    case ADD_COUNTRIES: {
      const { request: { data: { countries } } } = payload;

      return getStateAfterAddCountries(state, countries);
    }

    case reject(ADD_COUNTRIES): {
      const { previousAction: { payload: { request: { data: { countries } } } } } = meta;

      return getStateAfterRemoveCountries(state, countries);
    }

    case REMOVE_COUNTRIES: {
      const { request: { data: { countries } } } = payload;

      return getStateAfterRemoveCountries(state, countries);
    }

    case reject(REMOVE_COUNTRIES): {
      const { previousAction: { payload: { request: { data: { countries } } } } } = meta;

      return getStateAfterAddCountries(state, countries);
    }

    default: {
      return state;
    }
  }
};

export const loadCountries = createAction(LOAD_COUNTRIES, () => ({
  request: {
    url: '/countries',
    method: 'GET'
  }
})
);

export const addCountries = createAction(ADD_COUNTRIES, countries => ({
  request: {
    url: '/countries/add',
    method: 'PUT',
    data: {
      countries
    }
  }
})
);

export const removeCountries = createAction(REMOVE_COUNTRIES, countries => ({
  request: {
    url: '/countries/remove',
    method: 'PUT',
    data: {
      countries
    }
  }
})
);

import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware, { resolve, reject } from 'redux-simple-promise';
import { multiClientMiddleware } from 'redux-axios-middleware';
import { routerMiddleware } from 'react-router-redux';
import axios from 'axios';

import { serialize } from '../../../common/multipart-form';

import reducer from './reducer';

const suffixes = {
  successSuffix: resolve(''),
  errorSuffix: reject('')
};

const defaultClient = axios.create({
  baseURL: '/api',
  responseType: 'json'
});

const defaultRequestIntercpetors = [
  ({ getState }, config) => {
    const { auth: { token } } = getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
];

const defaultOptions = {
  ...suffixes,
  interceptors: {
    request: defaultRequestIntercpetors
  }
};

const axiosConfig = {
  default: {
    client: defaultClient,
    options: defaultOptions
  },
  withFiles: {
    client: defaultClient,
    options: {
      ...defaultOptions,
      interceptors: {
        request: [...defaultRequestIntercpetors, (state, config) => {
          config.data = serialize(config.data);
          config.headers['content-type'] =
            'multipart/form-data; boundary=WebKitFormBoundaryCIkXuNWC8OhEuT3S';
          return config;
        }]
      }
    }
  },
  auth: {
    client: axios.create({
      baseURL: '/auth',
      responseType: 'json'
    }),
    options: suffixes
  }
};

export default (history, initialState = {}) => createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(
      promiseMiddleware(),
      multiClientMiddleware(axiosConfig),
      routerMiddleware(history)
    )
  ));

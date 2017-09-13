import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware, { resolve, reject } from 'redux-simple-promise';
import { multiClientMiddleware } from 'redux-axios-middleware'
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';;

import reducer from './reducer';

const suffixes = {
  successSuffix: resolve(''),
  errorSuffix: reject('')
};

const axiosConfig = {
  default: {
    client: axios.create({
      baseURL: '/api',
      responseType: 'json'
    }),
    options: {
      ...suffixes,
      interceptors: {
        request: [
          ({ getState }, config) => {
            const { auth: { token } } = getState();

            if (token) {
              config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
          }
        ]
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

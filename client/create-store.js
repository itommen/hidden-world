import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// TODO: should change to each reducer
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  ));

export default store;
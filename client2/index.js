import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import reducer from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  ));

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

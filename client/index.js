import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {store} from './common/store';
import routes from './App/routes';

injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <MuiThemeProvider>      
      <Router history={history}>
        {routes}
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

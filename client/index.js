import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { store } from './common/store';
import App from './App';

import '../node_modules/material-design-icons/iconfont/material-icons.css';

injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store);

const renderApp = () => {
  render(
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={history}>
          {App}
        </Router>
      </MuiThemeProvider>
    </Provider >,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    // This wierd line is over here beacuse the browser doesn't update the view the
    // hmr act, when we require the app again the view is updating
    const justToRequire = require('./App').default;
    renderApp();
  });
}

renderApp();

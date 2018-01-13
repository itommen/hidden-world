import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import jss from 'jss';
import rtl from 'jss-rtl';

jss.use(rtl());

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  direction: 'rtl',
  typography: {
    fontFamily:
      '-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    button: {
      fontStyle: 'italic'
    }
  }
});

import { store } from './common/store';
import App from './App';

import '../node_modules/material-design-icons/iconfont/material-icons.css';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import 'typeface-roboto';

const history = syncHistoryWithStore(browserHistory, store);

const renderApp = () => {
  render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
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

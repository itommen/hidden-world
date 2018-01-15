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

import { hot } from 'react-hot-loader';

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

const Root = () => <Provider store={store}>
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
      {App}
    </Router>
  </MuiThemeProvider>
</Provider >;

render(<Root />, document.getElementById('root'));

export default hot(module)(Root);

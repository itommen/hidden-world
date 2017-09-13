import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Layout';
import Main from './Main';
import Login from './Login';

export default
  <Route path='/' component={Layout}>
    <IndexRoute component={Main} />
    <Route path='login' component={Login} />
  </Route>;

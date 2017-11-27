import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { store } from '../common/store';
import loadUser from '../common/auth/load-user';

import Layout from './Layout';
import Login from './Login';

import MainRoutes from './Main';

export default <Route path='/' component={Layout} onEnter={loadUser(store.dispatch)}>
  <Route path='login' component={Login} />
  {MainRoutes}
</Route>;

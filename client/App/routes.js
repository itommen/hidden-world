import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { store } from '../common/store';
import loadUser from '../common/auth/load-user';

import Layout from './Layout';
import Main from './Main';
import Login from './Login';

import TripPartRoutes from './Main/TripPart/routes';
import ManageCountriesRoutes from './Main/ManageCountries/routes';

export default <Route path='/' component={Layout} onEnter={loadUser(store.dispatch)}>
  <IndexRoute component={Main} />
  <Route path='login' component={Login} />
  {TripPartRoutes}
  {ManageCountriesRoutes}
</Route>;

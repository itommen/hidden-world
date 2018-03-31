import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './Home';

import TripPartRoutes from './TripPart/routes';
import ManageCountriesRoutes from './ManageCountries/routes';
import UsersRoutes from './Users/routes';

import loadInternalData from './load-internal-data';

export default <Route onEnter={loadInternalData}>
  <IndexRoute component={Home} />
  {TripPartRoutes}
  {ManageCountriesRoutes}
  {UsersRoutes}
</Route>;

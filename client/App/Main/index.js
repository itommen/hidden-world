import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './Home';

import TripPartRoutes from './TripPart/routes';
import ManageCountriesRoutes from './ManageCountries/routes';

export default <Route>
  <IndexRoute component={Home} />
  {TripPartRoutes}
  {ManageCountriesRoutes}
</Route>;

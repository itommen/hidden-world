import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './index';

export default <Route path='manageCountries'>
  <IndexRoute component={Main} />
</Route>;

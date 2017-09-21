import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './index';
import Insert from './Insert';

export default <Route path='tripPart'>
  <IndexRoute component={Main} />
  <Route path='/new' component={Insert} />
</Route>;

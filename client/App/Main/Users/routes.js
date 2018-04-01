import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './index';
import Insert from './Insert';
import FullScreen from './FullScreen';

export default <Route path='users'>
  <IndexRoute component={Main} />
  <Route path='new'>
    <IndexRoute component={Insert} />
  </Route>
  <Route path=':id'>
    <IndexRoute component={FullScreen} />
  </Route>
</Route>;

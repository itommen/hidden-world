import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './index';
import FullScreen from './FullScreen';
import Insert from './Insert';
import Edit from './Edit';

export default <Route path='tripPart'>
  <IndexRoute component={Main} />
  <Route path='new'>
    <IndexRoute component={Insert} />
  </Route>
  <Route path=':tripPartId'>
    <IndexRoute component={FullScreen} />
    <Route path='edit' component={Edit} />
  </Route>
</Route>;

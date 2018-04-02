import React from 'react';

import { Flex } from 'reflexbox';

import Toolbar from './Toolbar';
import NavigationBar from './NavigationBar';
import Popups from './Popups';

export default ({ isAutorized, alert, dialog, children }) =>
  <Flex id='root' column auto>
    <Toolbar isAutorized={isAutorized} />
    {isAutorized ? <NavigationBar /> : null}
    <Flex column auto m={8} style={{
      overflowY: 'auto'
    }}>
      {children}
    </Flex>
    <Popups alert={alert} dialog={dialog} />
  </Flex>;

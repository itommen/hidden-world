import React from 'react';

import { Flex } from 'reflexbox';
import Snackbar from 'material-ui/Snackbar';

import { clearAlert } from '../common/alerter';

import Toolbar from './Toolbar';
import NavigationBar from './NavigationBar';

export default ({ isAutorized, alert: { isOpen, message, autoHideDuration }, children }) =>
  <Flex id='root' column auto>
    <Toolbar isAutorized={isAutorized} />
    {isAutorized ? <NavigationBar /> : null}
    <Flex column auto m={8} style={{
      overflowY: 'auto'
    }}>
      {children}
    </Flex>
    <Snackbar
      open={isOpen}
      message={message}
      autoHideDuration={autoHideDuration}
      onClose={clearAlert}
    />
  </Flex>;

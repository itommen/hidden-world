import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { Flex } from 'reflexbox';

import Logout from './Logout';

export default ({ isAutorized }) => <AppBar
  position='static'
  title='עולם נסתר'>
  <Toolbar>
    <Flex auto justify='space-between'>
      <Typography type='title' color='inherit'>
        עולם נסתר
      </Typography>
      { isAutorized ? <Logout /> : null }
    </Flex>
  </Toolbar>
</AppBar>;

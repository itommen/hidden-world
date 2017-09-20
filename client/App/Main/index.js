import React from 'react';
import { Switch, Route } from 'react-router';
import { Flex } from 'reflexbox';

import Home from './Home';

export default class Main extends React.Component {
  render() {
    return <Flex column>      
      <Home />
    </Flex>;
  }
}

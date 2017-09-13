import React from 'react';
import { Switch, Route, Router } from 'react-router';
import { Flex } from 'reflexbox';

import Toolbar from './Toolbar';
import Login from './Login';
//import Main from './Main';

import './App.less';

export default class App extends React.Component {
  render() {
    return (      
        <Route path='/login' component={Login} />      
    );
  }
}

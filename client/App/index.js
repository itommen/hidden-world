import React from 'react';
import { Route } from 'react-router';

import Login from './Login';

import './App.less';

export default class App extends React.Component {
  render() {
    return (
      <Route path='/login' component={Login} />
    );
  }
}

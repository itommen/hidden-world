import React from 'react';
import { Switch, Route } from 'react-router';

import {store} from '../../common/store';
import Home from './Home';

export default class Main extends React.Component {
  componentWillMount() {
    const a = store;
    debugger;
  }

  render() {
    return <Home />;
  }
}

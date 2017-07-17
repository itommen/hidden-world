import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Flex } from 'reflexbox';

import Toolbar from './Toolbar';
import Login from './Login';
import Home from './Home';

import './App.less';

class App extends React.Component {
  render() {
    return (
            <Flex column id='app'>
                <Toolbar />
                <BrowserRouter>
                    <Switch>
                        <Login />
                        {/* <Route exact path='/a' component={Home} />
                        <Route path='/' component={Login} /> */}
                    </Switch>
                </BrowserRouter>
            </Flex>
    );
  }
}

export default App;

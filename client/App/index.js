import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Toolbar from './Toolbar';
import Login from './Login';
import Home from './Home';

import './App.less';

class App extends React.Component {    
    render() {
        return (
            <div style= {{ display: 'flex', flexDirection: 'column' }} >
                <Toolbar />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

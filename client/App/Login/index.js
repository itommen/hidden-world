import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';

// TODO: fix this
//import { login } from '../actions/login.action';

const login = () => {
    console.log('Logged!');
};

const mapStateToProps = (state, ownProps) => {
    return {        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (user) => {
            dispatch(login(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
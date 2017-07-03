import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';

import { login } from '../actions/login.action';

const mapStateToProps = (state, ownProps) => {
    const { loggedUser } = state;
    return {
        state: loggedUser.state
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (user) => {
            dispatch(login(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
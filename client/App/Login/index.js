import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './Login';
import { login as loginAction } from './redux';

// TODO: fix this
// import { login } from '../actions/login.action';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispath => ({
  onSubmit: data => {
    debugger;
    dispath(data);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

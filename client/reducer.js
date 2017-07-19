import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from './App/Login/redux';
import auth from './common/auth/redux';

export default combineReducers({  
  form: formReducer,
  login,
  auth
});

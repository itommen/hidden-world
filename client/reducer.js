import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from './App/Login/redux';

export default combineReducers({  
  login,
  form: formReducer
});

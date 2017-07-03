import { combineReducers } from 'redux';

import users from './users';
import login from './login.reducer';

export default combineReducers({
  users,
  login
});

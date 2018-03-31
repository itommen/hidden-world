import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

import alert from '../../App/common/alerter/redux';
import login from '../../App/Login/redux';
import auth from '../auth/redux';
import countries from '../../App/Main/ManageCountries/redux';
import tripParts from '../../App/Main/TripPart/redux';
import users from '../../App/Main/Users/redux';

export default combineReducers({
  routing,
  form: formReducer,
  login,
  auth,
  countries,
  tripParts,
  alert,
  users
});

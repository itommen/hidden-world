import { auth } from './redux';
import stateValidator from '../../App/common/state-validator';

export default function (dispatch) {
  return async function (nextState, replace, callback) {
    await dispatch(auth());
    stateValidator();
    callback();
  };
}

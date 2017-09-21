import { auth } from './redux';
import stateValidator from '../../App/common/state-validator';

export default function (dispatch) {
  return (nextState, replace, callback) => {
    dispatch(auth())
      .then(() => {
        stateValidator();
        callback();
      });
  };
}

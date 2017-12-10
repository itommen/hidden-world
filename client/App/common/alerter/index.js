import { createAlert, clearAlert as clearAlertAction } from './redux';
import { store } from '../../../common/store';

export default function ({ message }) {
  const { dispatch } = store;
  dispatch(createAlert({
    message
  }));
}

export function clearAlert() {
  const { dispatch } = store;
  dispatch(clearAlertAction());
}
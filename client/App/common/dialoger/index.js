import { createDialog, closeDialog as closeDialogAction } from './redux';
import { store } from '../../../common/store';

export default function ({ title, content, actions = [] }) {
  const { dispatch } = store;
  dispatch(createDialog({
    title,
    content,
    actions
  }));
}

export function closeDialog() {
  const { dispatch } = store;
  dispatch(closeDialogAction());
}

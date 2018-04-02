const internalState = {
  isOpen: false,
  title: '',
  content: '',
  actions: []
};

const CREATE_DIALOG = 'CREATE_DIALOG';
const CLOSE_DIALOG = 'CLOSE_DIALOG';

export default (state = internalState, { type, dialog: { title, content, actions } = {} }) => {
  switch (type) {
    case CREATE_DIALOG: {
      return { ...state, title, content, actions, isOpen: true };
    }

    case CLOSE_DIALOG: {
      return { ...state, ...internalState };
    }

    default: {
      return state;
    }
  }
};

export const createDialog = dialog => ({
  type: CREATE_DIALOG,
  dialog
});

export const closeDialog = () => ({
  type: CLOSE_DIALOG
});

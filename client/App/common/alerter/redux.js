const internalState = {
  isOpen: false,
  message: '',
  autoHideDuration: 4000
};

const CREATE_ALERT = 'CREATE_ALERT';
const CLEAR_ALERT = 'CLEAR_ALERT';

export default (state = internalState, { type, alert: { message } = {} }) => {
  switch (type) {
    case CREATE_ALERT: {
      return { ...state, message, isOpen: true };
    }

    case CLEAR_ALERT: {      
      return { ...state, ...internalState };
    }

    default: {
      return state;
    }
  }
};

export const createAlert = alert => ({
  type: CREATE_ALERT,
  alert
});

export const clearAlert = () => ({
  type: CLEAR_ALERT
});

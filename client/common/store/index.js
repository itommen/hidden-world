import { browserHistory } from 'react-router';

import createStore from './create-store';

export const store = createStore(browserHistory);

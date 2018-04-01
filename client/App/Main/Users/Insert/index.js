import React from 'react';

import EditComponent from '../EditComponent';

import { addUser } from '../redux';

export default () => <EditComponent action={addUser} />;

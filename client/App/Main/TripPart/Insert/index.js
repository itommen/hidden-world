import React from 'react';

import EditComponent from '../EditComponent';

import { insertTripPart } from '../redux';

export default () => <EditComponent action={insertTripPart} />;

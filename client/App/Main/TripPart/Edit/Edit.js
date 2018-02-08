import React from 'react';

import { CircularProgress } from 'material-ui/Progress';

import EditComponent from '../EditComponent';

export default ({ action, data }) => data
  ? <EditComponent action={action} data={data} />
  : <CircularProgress />;

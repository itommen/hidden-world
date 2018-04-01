import React from 'react';

import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

import { Flex } from 'reflexbox';

export default ({ data: { userName, firstName, lastName, email } = {}, loaded }) => !loaded
  ? <CircularProgress />
  : <Flex column auto>

    < Typography type='display4' gutterBottom > {userName}</Typography >
    <div>
      <Typography>שם פרטי:</Typography>
      <Typography type='title' gutterBottom>{firstName}</Typography>
    </div>
    <div>
      <Typography>שם משפחה:</Typography>
      <Typography type='title' gutterBottom>{lastName}</Typography>
    </div>
    <div>
      <Typography>דוא"ל:</Typography>
      <Typography type='title' gutterBottom>{email}</Typography>
    </div>
  </Flex >;

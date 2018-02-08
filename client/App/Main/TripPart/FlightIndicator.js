import React from 'react';

import FlightTakeoffIcon from 'material-ui-icons/FlightTakeoff';
import Tooltip from 'material-ui/Tooltip';

import { domestic, foreign } from './flight-type.const';

export default ({ flights = [] }) => <div>
  {flights.includes(domestic)
    ? <Tooltip title='טיסת פנים' placement='bottom'>
      <FlightTakeoffIcon />
    </Tooltip>
    : null}
  {flights.includes(foreign)
    ? <Tooltip title='טיסת חוץ' placement='bottom'>
      <FlightTakeoffIcon color='accent' />
    </Tooltip>
    : null}
</div>;

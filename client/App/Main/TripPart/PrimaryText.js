import React from 'react';

import { Flex, Box } from 'reflexbox';
import FlightIndicator from './FlightIndicator';

import formatPlace from './format-location';

export default ({ name, start, end, flight }) => <Flex auto>
  <Box mx={2}><b>{name}</b></Box>
  <Box mx={2}>מתחיל ב {formatPlace(start)}</Box>
  <Box mx={2}>נגמר ב {formatPlace(end)}</Box>
  <Box><FlightIndicator flights={flight} /></Box>
</Flex>;

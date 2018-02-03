import React from 'react';

import Card, { CardContent } from 'material-ui/Card';
import { Flex } from 'reflexbox';

import Typography from 'material-ui/Typography';

import StarsRate from './StarsRate';

export default ({ name, link, stars, children }) => <Card style={{
  margin: '10px',
  minWidth: '130px'
}}>
  <CardContent>
    <Flex align='left'>
      {children}
    </Flex>
    <Flex justify='space-around'>
      <Typography type='display1'
        onClick={() => window.open(link)}>{name}</Typography>
    </Flex>
    <Flex justify='space-around'>
      <StarsRate rate={stars} />
    </Flex>
  </CardContent>
</Card>;

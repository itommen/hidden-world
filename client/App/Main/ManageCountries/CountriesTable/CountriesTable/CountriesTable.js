import React from 'react';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

import { Flex } from 'reflexbox';

export default ({ countries, onCellClicked }) => <Flex auto>
  <Table style={{ direction: 'ltr' }}>
    <TableHead>
      <TableRow>
        <TableCell padding='none' style={{ width: '10%' }} />
        <TableCell>Name</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        countries.map(x => <TableRow key={x}>
          <TableCell padding='none'>
            <Checkbox
              onChange={() => onCellClicked(x)} />
          </TableCell>
          <TableCell>{x}</TableCell>
        </TableRow>)
      }
    </TableBody>
  </Table>
</Flex>;

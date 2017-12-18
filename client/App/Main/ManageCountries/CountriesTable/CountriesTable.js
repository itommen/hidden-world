import React from 'react';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

import { Flex } from 'reflexbox';

export default class CountriesTable extends React.Component {
  constructor() {
    super();

    this.isSelected = this.isSelected.bind(this);
    this.onCellClicked = this.onCellClicked.bind(this);
  }

  isSelected(index) {
    return this.props.selected.includes(index);
  }

  onCellClicked(country) {
    const { onSelect } = this.props;
    return () => onSelect(country);
  }

  render() {
    const { countries } = this.props;

    // The 'style' attribute is here until the bug fixed in angular material suporting rtl in tables
    return <Flex auto>
      <Table style={{ direction: 'ltr' }}>
        <TableHead>
          <TableRow>
            <TableCell padding='none' style={{ width: '10%' }}/>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            countries.map(x => <TableRow key={x}>
              <TableCell padding='none'>
                <Checkbox
                  onChange={this.onCellClicked(x)} />
              </TableCell>
              <TableCell>{x}</TableCell>
            </TableRow>)
          }
        </TableBody>
      </Table>
    </Flex>;
  }
}

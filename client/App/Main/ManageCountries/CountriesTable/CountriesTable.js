import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
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

  onCellClicked(row) {
    const { countries, onSelect } = this.props;
    onSelect(countries[row]);
  }

  render() {
    const { countries } = this.props;

    // The 'style' attribute is here until the bug fixed in angular material suporting rtl in tables
    return <Flex column auto>

      <Table style={{ direction: 'ltr' }}
        multiSelectable={true}
        onCellClick={this.onCellClicked}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          {
            countries.map(x => <TableRow key={x} selected={this.isSelected(x)}>
              <TableRowColumn>{x}</TableRowColumn>
            </TableRow>)
          }
        </TableBody>
      </Table>
    </Flex>;
  }
}

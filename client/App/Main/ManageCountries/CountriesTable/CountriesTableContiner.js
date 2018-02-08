import React from 'react';
import { Flex } from 'reflexbox';

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import TextField from 'material-ui/TextField';

import { toLower, pull } from 'lodash';

import ContriesTable from './CountriesTable';

export default class CountriesTableContiner extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: [],
      filter: ''
    };

    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.onMoveClicked = this.onMoveClicked.bind(this);
    this.updateFilterText = this.updateFilterText.bind(this);
  }

  handleRowSelection(selectedCountry) {
    const selected = [...this.state.selected];

    if (selected.includes(selectedCountry)) {
      pull(selected, selectedCountry);
    } else {
      selected.push(selectedCountry);
    }


    this.setState(state => ({ ...state, selected }));
  }

  updateFilterText({ target: { value } }) {
    this.setState(state => ({ ...state, filter: value }));
  }

  onMoveClicked() {
    const { onClick } = this.props;
    const { selected } = this.state;

    onClick(selected);

    this.setState(state => ({ ...state, selected: [] }));
  }

  getFilteredCountries() {
    const { filter } = this.state;
    const { countries = [] } = this.props;

    const lowerCaseFilter = toLower(filter);

    return countries.filter(x => toLower(x).includes(lowerCaseFilter));
  }

  render() {
    const { title, moveTo, loading } = this.props;
    const { selected } = this.state;

    return <Card style={{ flex: '1 1 auto' }} id='card'>
      <CardHeader title={title} subheader='' />
      <CardContent style={{ height: '50%', overflowY: 'auto' }}>
        {
          loading
            ? <CircularProgress size={70} />
            : <Flex column auto>
              <TextField value={this.state.filter}
                label='filter countries'
                onChange={evt => this.updateFilterText(evt)}
                id='filter'
                fullWidth={true} />
              <ContriesTable onSelect={this.handleRowSelection}
                selected={selected}
                countries={this.getFilteredCountries()} />
            </Flex>
        }
      </CardContent>
      <CardActions>
        {
          loading
            ? null
            : <Button
              raised
              name={'move'}
              onClick={this.onMoveClicked}>
              {`Move to '${moveTo}'`}
            </Button>
        }
      </CardActions>
    </Card>;
  }
}

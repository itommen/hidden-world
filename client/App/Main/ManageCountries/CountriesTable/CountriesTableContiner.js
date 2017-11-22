import React from 'react';
import { Flex } from 'reflexbox';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
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

    this.setState(state => Object.assign({}, state, {
      selected
    }));
  }

  updateFilterText({ target: { value } }) {
    this.setState(state => Object.assign({}, state, {
      filter: value
    }));
  }

  onMoveClicked() {
    const { onClick } = this.props;
    const { selected } = this.state;

    onClick(selected);

    this.setState(state => Object.assign({}, state, {
      selected: []
    }));
  }

  getFilteredCountries() {
    const { filter } = this.state;
    const { countries = [] } = this.props;

    const lowerCaseFilter = toLower(filter);

    return countries.filter(x => toLower(x).includes(lowerCaseFilter));
  }

  getCardBody() {
    const { loading } = this.props;
    const { selected } = this.state;

    if (loading) {
      return <CircularProgress size={70} />;
    }

    return <Flex column auto>
      <Flex auto>
        <TextField value={this.state.filter}
          hintText='filter countries'
          onChange={evt => this.updateFilterText(evt)}
          id='filter'
          style={{ flex: 1 }} />
      </Flex>
      <ContriesTable onSelect={this.handleRowSelection}
        selected={selected}
        countries={this.getFilteredCountries()} />
    </Flex>;
  }

  render() {
    const { title, moveTo, loading } = this.props;

    return <Card style={{ flex: '1 1 auto' }} id='card'>
      <CardTitle title={title} />
      <Flex auto justify='center'>
        <CardText style={{ height: '50%', overflowY: 'auto' }}>
          {this.getCardBody()}
        </CardText>
      </Flex>
      <CardActions>
        {
          loading
            ? <span />
            : <RaisedButton
              name={'move'}
              label={`Move to '${moveTo}'`}
              primary={true}
              onClick={this.onMoveClicked} />
        }
      </CardActions>
    </Card>;
  }
}

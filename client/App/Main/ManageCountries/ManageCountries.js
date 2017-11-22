import React from 'react';
import { Flex } from 'reflexbox';

import CountriesTableContiner from './CountriesTable/CountriesTableContiner';

export default class ManageCountries extends React.Component {
  constructor() {
    super();

    this.addCountries = this.addCountries.bind(this);
    this.removeCountries = this.removeCountries.bind(this);
  }

  componentWillMount() {
    const { loadCountries } = this.props;
    loadCountries();
  }

  addCountries(countries) {
    const { addCountries } = this.props;
    addCountries(countries);
  }

  removeCountries(countries) {
    const { removeCountries } = this.props;
    removeCountries(countries);
  }

  render() {
    const { loading, relevant, notRelevant } = this.props;

    return <Flex style={{ padding: '25px 0' }} justify='space-around'>
      <Flex w={0.47}>
        <CountriesTableContiner countries={relevant}
          title='relevant'
          moveTo='not relevant'
          loading={loading}
          onClick={this.removeCountries} />
      </Flex>
      <Flex w={0.47}>
        <CountriesTableContiner countries={notRelevant}
          title='not relevant'
          moveTo='relevant'
          loading={loading}
          onClick={this.addCountries} />
      </Flex>
    </Flex>;
  }
}

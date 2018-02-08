import React from 'react';
import { Flex } from 'reflexbox';

import CountriesTableContiner from './CountriesTable/CountriesTableContiner';

export default ({ loading, relevant, notRelevant, addCountries, removeCountries }) => <Flex
  style={{ padding: '25px 0' }}
  justify='space-around'>
  <Flex w={0.47}>
    <CountriesTableContiner countries={relevant}
      title='relevant'
      moveTo='not relevant'
      loading={loading}
      onClick={removeCountries} />
  </Flex>
  <Flex w={0.47}>
    <CountriesTableContiner countries={notRelevant}
      title='not relevant'
      moveTo='relevant'
      loading={loading}
      onClick={addCountries} />
  </Flex>
</Flex>;

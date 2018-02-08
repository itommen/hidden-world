import { connect } from 'react-redux';
import { compose } from 'recompose';

import CountriesTable from './CountriesTable';

export default compose(
  connect(
    (state, { selected, onSelect, countries }) => ({
      selected,
      countries,
      onCellClicked: country => onSelect(country)
    }),
    () => ({}))
)(CountriesTable);

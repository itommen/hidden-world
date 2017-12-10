import React from 'react';

import { Flex } from 'reflexbox';
import { Field } from 'redux-form';

import MenuItem from 'material-ui/MenuItem';
import { SelectField } from 'redux-form-material-ui';

import { getCities } from 'countries-cities';

export default class LocationSelector extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCountry: '',
      isCitySelectionDisabled: true
    };

    this.countryChanged = this.countryChanged.bind(this);
    this.getCities = this.getCities.bind(this);
    this.mapMenuItems = this.mapMenuItems.bind(this);
  }

  countryChanged(ev, selectedCountry) {
    this.setState(state => ({ ...state, selectedCountry, isCitySelectionDisabled: false }));
  }

  getCities() {
    const { selectedCountry } = this.state;

    return selectedCountry
      ? getCities(selectedCountry) || []
      : [];
  }

  mapMenuItems(list) {
    return list.map(x => <MenuItem key={x} value={x} primaryText={x} />);
  }

  render() {
    const { countries } = this.props;
    const { isCitySelectionDisabled } = this.state;

    return <Flex>
      <Field name='country'
        component={SelectField}
        floatingLabelText='מדינה'
        maxHeight={200}
        style={{ marginLeft: '10px' }}
        onChange={this.countryChanged}>
        {this.mapMenuItems(countries)}
      </Field>

      <Field name='city'
        component={SelectField}
        floatingLabelText='עיר'
        maxHeight={200}
        disabled={isCitySelectionDisabled}>
        {this.mapMenuItems(this.getCities())}
      </Field>
    </Flex>;
  }
};
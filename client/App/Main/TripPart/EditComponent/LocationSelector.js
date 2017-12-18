import React from 'react';

import { Flex } from 'reflexbox';
import { Field } from 'redux-form';

import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

import { Select } from 'redux-form-material-ui';


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


  componentWillMount() {
    const { data } = this.props;
    if (data) {
      this.countryChanged(null, data.country);
    }
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
    return list.map(x => <MenuItem key={x} value={x}>{x}</MenuItem>);
  }

  render() {
    const { countries } = this.props;
    const { isCitySelectionDisabled } = this.state;

    return <Flex auto>
      <FormControl>
        <InputLabel>מדינה</InputLabel>
        <Field name='country'
          component={Select}
          autoWidth
          style={{ marginLeft: '10px' }}
          onChange={this.countryChanged}
          MenuProps={{ PaperProps: { style: { maxHeight: 400 } } }}>
          {this.mapMenuItems(countries)}
        </Field>
      </FormControl>
      <FormControl>
        <InputLabel>עיר</InputLabel>
        <Field name='city'
          component={Select}
          MenuProps={{ PaperProps: { style: { maxHeight: 400 } } }}
          disabled={isCitySelectionDisabled}>
          {this.mapMenuItems(this.getCities())}
        </Field>
      </FormControl>
    </Flex>;
  }
}

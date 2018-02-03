import React, { Fragment } from 'react';

import { FormControl } from 'material-ui/Form';
import { Field, FormSection } from 'redux-form';
import Typography from 'material-ui/Typography';
import FeaturedHotels from '../../FeaturedHotels';

import LocationSelector from './LocationSelector';

import { TextField } from 'redux-form-material-ui';

import { Flex } from 'reflexbox';

import CheckboxGroup from '../../../../../common/CheckboxGroup';
import { domestic, foreign } from '../../../flight-type.const';

export default ({ countries, start, end }) => <Fragment>
  <FormControl>
    <Field name='name'
      label='שם ליום טיול'
      component={TextField} />
  </FormControl>
  <FormSection name='start'>
    <Flex>
      <Typography>יציאה מ</Typography>
      <LocationSelector countries={countries} data={start} />
    </Flex>
  </FormSection>

  <FormSection name='end'>
    <Flex>
      <Typography>הגעה ל</Typography>
      <LocationSelector countries={countries} data={end} />
    </Flex>
  </FormSection>

  <Field name='flight'
    component={CheckboxGroup}
    items={[{ key: domestic, label: 'פנים' }, { key: foreign, label: 'חוץ' }]}
    formLabel='טיסות'
  />

  <Field name='days'
    component={TextField}
    type='number'
    InputProps={{ inputProps: { min: 1 } }}
    label='כמה ימים' />

  <Field name='hotels'
    component={FeaturedHotels}
    label={'מלונות'}
  />
</Fragment>;

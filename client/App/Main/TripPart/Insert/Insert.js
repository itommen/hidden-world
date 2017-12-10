import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';

import { Flex } from 'reflexbox';
import { reduxForm, Field, FormSection } from 'redux-form';

import { TextField } from 'redux-form-material-ui';

import LocationSelector from './LocationSelector';

import validate from '~/common/validators/tripPart';

// TODO: maybe use it when waiting for login
// import CircularProgress from 'material-ui/CircularProgress';
const InsertTripPart = ({ handleSubmit, countries, submitting }) => <Flex auto style={{
  overflowY: 'auto'
}}>
  <form onSubmit={handleSubmit} style={{ flex: '1 1 auto' }}>
    <Card>
      <CardTitle title={'יום טיול'} />
      <CardText>
        <Flex column auto>
          <Field name='name'
            component={TextField}
            floatingLabelText='שם ליום טיול' />

          <FormSection name='start'>
            <LocationSelector countries={countries} />
          </FormSection>

          <FormSection name='end'>
            <LocationSelector countries={countries} />
          </FormSection>

          <Field name='description'
            component={TextField}
            floatingLabelText='תיאור'
            multiLine={true}
            rows={2}
            fullWidth={true} />

          <Field name='days'
            component={TextField}
            floatingLabelText='כמה ימים' />
        </Flex>
      </CardText>
      <CardActions>
        <RaisedButton
          type='submit'
          name={'login'}
          label={'הוסף'}
          disabled={submitting}
          primary={true} />
      </CardActions>
    </Card>
  </form>
</Flex >;

export default reduxForm({
  form: 'insertTripPartForm',
  validate
})(InsertTripPart);

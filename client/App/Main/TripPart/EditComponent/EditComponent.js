import React from 'react';

import Button from 'material-ui/Button';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Typography from 'material-ui/Typography';

import ImageUploader from './ImageUploader';

import { Flex } from 'reflexbox';
import { reduxForm, Field, FormSection } from 'redux-form';

import { TextField, Select } from 'redux-form-material-ui';

import LocationSelector from './LocationSelector';

import validate from '~/common/validators/tripPart';

import { domestic, foreign } from '../flight-type.const';

// TODO: maybe use it when waiting for login
// import CircularProgress from 'material-ui/CircularProgress';
class InsertTripPart extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      pictures: {}
    };
  }
  componentWillMount() {
    const { data, initialize } = this.props;

    if (data) {
      initialize(data);
    }
  }

  render() {
    const { handleSubmit, countries, submitting, data = {} } = this.props;
    const images = data.savedImages || [];

    return <Flex auto>
      <form onSubmit={handleSubmit} style={{ flex: '1 1 auto' }}>
        <Card>
          <CardHeader title={'יום טיול'} subheader='' />
          <CardContent>
            <FormControl>
              <Field name='name'
                label='שם ליום טיול'
                component={TextField} />
            </FormControl>
            <FormSection name='start'>
              <Flex>
                <Typography>יציאה מ</Typography>
                <LocationSelector countries={countries} data={data.start} />
              </Flex>
            </FormSection>

            <FormSection name='end'>
              <Flex>
                <Typography>הגעה ל</Typography>
                <LocationSelector countries={countries} data={data.end} />
              </Flex>
            </FormSection>

            <FormControl>
              <InputLabel>טיסה</InputLabel>
              <Field name='flight'
                multiple={true}
                component={Select}>
                <MenuItem value={null} />
                <MenuItem key={domestic} value={domestic}>פנים</MenuItem>
                <MenuItem key={foreign} value={foreign}>חוץ</MenuItem>
              </Field>
            </FormControl>
            <Field name='description'
              component={TextField}
              label='תיאור'
              multiline={true}
              rows={2}
              fullWidth={true} />

            <Field name='days'
              component={TextField}
              type='number'
              InputProps={{ inputProps: { min: 1 } }}
              label='כמה ימים' />

            <Field name='images'
              component={ImageUploader}
              images={images}
            />

          </CardContent>
          <CardActions>
            <Button
              raised
              type='submit'
              name={'login'}
              disabled={submitting}
              color='primary'>
              שמור
            </Button>
          </CardActions>
        </Card>
      </form>
    </Flex >;
  }
}

export default reduxForm({
  form: 'editTripPartForm',
  validate,
  initialValues: {
    flight: []
  }
})(InsertTripPart);

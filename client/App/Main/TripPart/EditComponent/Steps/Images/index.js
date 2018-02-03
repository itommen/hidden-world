import React from 'react';

import { Field } from 'redux-form';

import ImageUploader from './ImageUploader';

export default ({ savedImages = [] }) => <Field name='images'
  component={ImageUploader}
  images={savedImages}
/>;

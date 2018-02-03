import React from 'react';

import Card, { CardHeader, CardContent } from 'material-ui/Card';

import LocalFilesImageGallery from './LocalFilesImageGallery';

export default ({ input: { onChange, value }, images }) => <Card>
  <CardHeader title='תמונות מהיום' subheader={<input type='file'
    multiple
    accept='image/*'
    onChange={({ target: { files } }) => onChange(files)} />} />
  <CardContent>
    {
      <LocalFilesImageGallery files={value} savedImages={images} />
    }
  </CardContent>
</Card>;

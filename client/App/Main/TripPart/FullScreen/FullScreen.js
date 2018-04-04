import React from 'react';

import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

import { Parser } from 'html-to-react';

import { Flex } from 'reflexbox';

import ImageGallery from 'react-image-gallery';

import FlightIndicator from '../FlightIndicator';

import formatPlace from '../format-location';

export default ({ data: { name, start, end, description, days, flight, savedImages = [] } = {}, loaded }) => !loaded
  ? <CircularProgress />
  : <Flex column auto>

    < Typography type='display4' gutterBottom > {name}</Typography >
    <div>
      <Typography>מתחיל ב:</Typography>
      <Typography type='title' gutterBottom>{formatPlace(start)}</Typography>
    </div>

    <div>
      <Typography>נגמר ב: </Typography>
      <Typography type='title' gutterBottom>{formatPlace(end)}</Typography>
    </div>
    <div>
      <Typography>משך: </Typography>
      <Typography type='title' gutterBottom>{days} ימים</Typography>
    </div>
    <FlightIndicator flights={flight} />
    <div>
      <Typography type='display3'>תיאור היום</Typography>
      {new Parser().parse(description)}
    </div>
    <div>
      <Typography type='display3'>גלריה</Typography>
      <ImageGallery
        items={savedImages.map(x => ({
          original: `/uploads/${x}`,
          thumbnail: `/uploads/${x}`
        }))}
        showPlayButton={false}
        showIndex={true} />
    </div>
  </Flex >;

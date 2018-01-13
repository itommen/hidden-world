import React from 'react';

import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

import { Flex } from 'reflexbox';

import ImageGallery from 'react-image-gallery';

import FlightIndicator from '../FlightIndicator';

export default class FullScreen extends React.Component {
  constructor() {
    super();

    this.formatLoaction = this.formatLoaction.bind(this);
  }

  componentWillMount() {
    const { fetch } = this.props;
    fetch();
  }

  formatLoaction({ country, city }) {
    return `${country}, ${city}`;
  }

  render() {
    const { data } = this.props;
    if (!data) {
      return <CircularProgress />;
    }

    const { name, start, end, description, days, flight, savedImages = [] } = data;
    return <Flex column auto>

      <Typography type='display4' gutterBottom>{name}</Typography>
      <div>
        <Typography>מתחיל ב:</Typography>
        <Typography type='title' gutterBottom>{this.formatLoaction(start)}</Typography>
      </div>

      <div>
        <Typography>נגמר ב: </Typography>
        <Typography type='title' gutterBottom>{this.formatLoaction(end)}</Typography>
      </div>
      <div>
        <Typography>משך: </Typography>
        <Typography type='title' gutterBottom>{days} ימים</Typography>
      </div>
      <FlightIndicator flights={flight} />
      <div>
        <Typography type='display3'>תיאור היום</Typography>
        <Typography>{description}</Typography>
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
    </Flex>;
  }
}

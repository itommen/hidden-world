import mongoose from 'mongoose';

import FeaturedHotel from '../FeaturedHotel';

const LocationSchema = mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

const TripPart = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  start: LocationSchema,
  end: LocationSchema,
  flight: {
    type: [Number],
    required: false
  },
  description: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  hotels: {
    type: [FeaturedHotel],
    required: false
  },
  images: {
    type: [String],
    required: false
  }
});

export default mongoose.model('TripPart', TripPart);

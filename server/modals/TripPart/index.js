import mongoose from 'mongoose';

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
  description: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    required: true
  }
});

export default mongoose.model('TripPart', TripPart);

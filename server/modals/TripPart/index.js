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

// TODO: Yet have to save wich image belong
const TripPart = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  start: LocationSchema,
  end: LocationSchema,
  flight: {
    type: [Number],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    required: false
  }
});

export default mongoose.model('TripPart', TripPart);

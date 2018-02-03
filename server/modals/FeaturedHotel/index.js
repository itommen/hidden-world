import mongoose from 'mongoose';

export default mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  }
});

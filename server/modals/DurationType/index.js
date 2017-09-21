import mongoose from 'mongoose';

const durationTypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model('DurationType', durationTypeSchema);

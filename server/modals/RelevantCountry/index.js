import mongoose from 'mongoose';

const relevantCountrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model('RelevantCountry', relevantCountrySchema);

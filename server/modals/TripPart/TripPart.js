import mongoose from 'mongoose';

const tripPartSchema = mongoose.Schema({
	name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    durationType: {
        type: mongoose.Types.ObjectId,
        ref: 'DurationType',
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

export default mongoose.model('TripPart', tripPartSchema);
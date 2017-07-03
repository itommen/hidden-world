import mongoose from 'mongoose';

const sessionSchema = mongoose.Schema({
	userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});

export default mongoose.model('Session', sessionSchema);
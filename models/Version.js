import mongoose from 'mongoose';

const { Schema } = mongoose;

const versionSchema = new Schema({
    deviceType: {
        type: String,
        required: true
    },
    versionCode: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const Version = mongoose.model('Version', versionSchema);

export default Version;
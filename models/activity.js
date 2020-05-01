const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    longDescription: {
        type: String,
        required: false,
    },
    state: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    tag: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Activity', activitySchema);
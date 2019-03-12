const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1800,
        max: 2019
    },
    engine: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Car', carSchema);
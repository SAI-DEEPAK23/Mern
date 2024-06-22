const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const placeSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    location:{
        lat:{type:Number,required:true},
        lng:{type:Number,required:true}
    },
    creator:{
        type: mongoose.Types.ObjectId,
        required:true,
        ref:'User'
    }
});

module.exports = mongoose.model('Place',placeSchema);
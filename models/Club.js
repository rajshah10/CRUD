const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    cid:{
        type: Number,
        required: true
    },
    pid:{
        type: Number,
        required: true
    },
    cname:{
        type: String,
        required: true
    },
    pname:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('teams', teamSchema);
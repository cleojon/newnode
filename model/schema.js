//Schema
const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    firstname : {
        type: String,
        require :true
    },
    lastname : {
        type: String,
        require : true
    },
    phonenumber : {
        type: String,
        require :true
    }
});
module.exports = mongoose.model('Posts', PostSchema);
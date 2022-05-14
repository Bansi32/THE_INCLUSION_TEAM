const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    emai: {
        type: String,
        required:true
    }, username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
}, { timestamps: true });

module.exports = new mongoose.model('User', userSchema,'user');
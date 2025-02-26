const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose')

//user attributes
const userAttributes = {
    email : {type: String, unique: true},
    firstname : {type: String},
    lastname : {type: String},
    phone: {type: String},
    password : {type: String}
}
const userSchema = new mongoose.Schema(userAttributes)

const User = mongoose.model('User', userSchema)

module.exports = User;
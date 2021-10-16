const mongoose = require('mongoose')

//user attributes
const userAttributes = {

}
const userSchema = new mongoose.Schema(userAttributes)

const User = mongoose.model('User', userSchema)

module.exports = User;
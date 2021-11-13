const mongoose = require('mongoose')

let url = process.env.MONGO_DB_URL

const configOpts = {
    useMongoClient : true,
    useNewUrlParser: true,
    authSource: process.env.MONGO_DATABASE
}

mongoose.Promise  = global.Promise
mongoose.connect(url, configOpts, (err)=> {
    if (err) {
        console.log('Error connecting to mongodb')
    }
    
})

mongoose.set('debug', true)

module.exports = mongoose.connection
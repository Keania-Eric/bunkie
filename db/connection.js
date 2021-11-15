const mongoose = require('mongoose')

const url = process.env.MONGO_DB_URL

const db = process.env.MONGO_DATABASE

const configOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
    //authSource: db
}

exports.connect = ()=> {
    mongoose.connect(url, configOpts).then(()=> {
        console.log("Successfully connected to a database")
    }).catch((error)=> {
        console.log("Database connection failed")
        console.log(error)
        process.exit(1)
    })
}
const User = require('../models/user.models')
const bcrypt = require('bcryptjs')

class registerService {


    static async register(req){

        let response = {status: 201, message: "User created succussful", success: false}
        const {email, phone, firstname, lastname, password} = req.body

        if(! (email && phone && firstname && lastname && password)) {
            response.status = 400
            response.message = "All input should be field"
            return response;
        }

        //check user exists before
        const userExists = await User.findOne({email})
        if (userExists) {
            response.status = 409
            response.message = "User already exists. Login"
            return response;
        }

        // lets hash the password
        let hashedPassword = await bcrypt.hash(password, 10)

        // create user
        const user = await User.create({
            firstname,
            lastname,
            phone,
            password: hashedPassword,
            email: email.toLowerCase()
        })

        // response is successful
        response.success = true
        return response
    }
}


module.exports = registerService
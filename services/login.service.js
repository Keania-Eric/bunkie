const User = require('../models/user.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class loginService {

    static async sigin(req){

        let response = {status: 200, message: {}, success: false}

        const tokenKey = process.env.TOKEN_KEY

        const {email, password} = req.body

        if (! (email && password)) {
            response.message.msg = "All fields should be present"
            response.status = 422
            return response
        }

        let user = await User.findOne({email})

        // if password does not checkout nicely
        if (! (user && await bcrypt.compare(password, user.password))) {
            response.message.msg = "Invalid credentials submitted"
            response.status = 400
            return response
        } 

        // we create a jwt token for this user now
        const token  = jwt.sign({user_id: user._id, email}, tokenKey, { "expiresIn": "2h"})


        // save the token
        user.token = token

        response.message.user = user
        response.message.token = token
        response.success = true
        response.message.msg = "Login was successful"
        return response;

    }
}


module.exports = loginService
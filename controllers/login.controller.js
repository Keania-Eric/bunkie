const loginService = require('../services/login.service')


class loginController {

    static async login(req, res, next){

        try {
    
            let response  = await loginService.sigin(req)
            res.status(response.status).json(response.message)
    
        }catch(error) {

            console.log(error)
            res.status(500).json("An internal server error occured")
        }
    }
}

module.exports = loginController

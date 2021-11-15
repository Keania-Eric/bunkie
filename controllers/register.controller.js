const registerService = require('../services/register.service')



class registerController {

    static async register(req, res, next){

        try {

            let response = await registerService.register(req)
    
            res.status(response.status).json(response.message)
            
        }catch(error) {
           
            res.status(500).json({msg: "An internal error occured", status: false})
        }
    }

    static loggedIn(req, res, next) {
        res.status(200).json(req.user)
    }
}


module.exports = registerController
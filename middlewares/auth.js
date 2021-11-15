const jwt = require('jsonwebtoken')


class AuthMiddleware {

    static verifyToken = (req, res, next)=> {

        try {

            const token = req.body.token || req.query.token || req.headers["x-access-token"]

            if (! token) {
                res.status(403).json("A token is required to proceed")
            }

            const decoded = jwt.verify(token, process.env.TOKEN_KEY)
            
            req.user = decoded

        }catch(error) {
            console.log(error)
            res.status(500).json("An internal error occured")
        }

        return next()
    }
}


module.exports = AuthMiddleware
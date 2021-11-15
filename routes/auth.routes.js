const express = require('express')
const loginController = require('../controllers/login.controller')
const registerController = require('../controllers/register.controller')
const parser = require('body-parser')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()
const jsonParser = parser.json()

router.post('/register', jsonParser, registerController.register)
router.post('/login', jsonParser, loginController.login)
router.get('/user', [jsonParser, authMiddleware.verifyToken], loginController.loggedIn)

module.exports = router
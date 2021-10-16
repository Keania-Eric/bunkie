const express = require('express')
const loginController = require('../controllers/login.controller')

const router = express.Router()

router.post('/register', loginController.register)
router.post('/login', loginController.login)
router.post('/logout', loginController.logout)


module.exports = router
const express = require('express')

const router = express.Router()

const controller = require('../controller/auth_controller')

router.post('/registration', (req, res) => controller.registration(req, res))
router.post('/login', (req, res) => controller.login(req, res))

module.exports = router
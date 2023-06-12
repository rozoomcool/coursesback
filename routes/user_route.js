const express = require('express')

const router = express.Router()

const controller = require('../controller/user_controller')
const authMiddleware = require('../middleware/auth_middleware')

router.post("/create", (req, res) => controller.createUser(req, res))

router.get("/:id", authMiddleware, (req, res) => controller.findUserById(req, res))

module.exports = router;
const express = require('express')
const router = express.Router()

const controller = require('../controller/user_controller')

router.post("/create", (req, res) => controller.createUser(req, res))

router.get("/:id", (req, res) => controller.findUserById(req, res))

module.exports = router;
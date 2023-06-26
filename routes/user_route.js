const express = require('express')

const router = express.Router()

const controller = require('../controller/user_controller')
const authMiddleware = require('../middleware/auth_middleware')
const roleMiddleware = require('../middleware/role_middleware')
const canChangeMiddleware = require('../middleware/can_change_middleware')


// router.post("/create", (req, res) => controller.createUser(req, res))

router.get('/:id', roleMiddleware(['ADMIN', 'TEACHER', 'STUDENT']), (req, res) => controller.findUserById(req, res))
router.get('/', roleMiddleware(['STUDENT', 'ADMIN', 'TEACHER']), (req, res) => controller.getCurrentUser(req, res))
router.put('/', canChangeMiddleware, (req, res) => controller.updateUser(req, res))

module.exports = router;
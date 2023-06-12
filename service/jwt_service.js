const jwt = require('jsonwebtoken')
const {secret_key} = require('../config/config.json');

module.exports.generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, secret_key, {expiresIn: "24000000"})
}

module.exports.verifyToken = (token) => {
    return jwt.verify(token, secret_key)
}
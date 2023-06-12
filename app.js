const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const db = require("./models")

const userRouter = require('./routes/user_route')
const authRouter = require('./routes/auth_route')

const {check} = require('express-validator')

app.use('/', express.json())

app.use('/user', userRouter)
app.use('/auth', [
    check('nickname', "incorrect username")
    .notEmpty()
    .isLength({min: 6, max: 16}),
    check('email', "incorrect email")
    .notEmpty()
    .isEmail(),
    check('password', "incorrect password")
    .notEmpty()
    .isLength({min: 8, max: 24}),
], authRouter)

const start = () => {
    try{
        db.sequelize.sync({force: true}).then((req) => {
            app.listen(PORT, () => console.log(`Server running at ${PORT}`))
        }).catch((err) => console.error("ERROR TO DB CONNECTION"))
    } catch (e) {
        console.error(e)
    }
}

start()


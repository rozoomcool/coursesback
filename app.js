const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const db = require("./models")

const userRouter = require('./routes/user_route')

app.use('/', express.json())
app.use('/user', userRouter)


db.sequelize.sync({force: true}).then((req) => {
    app.listen(PORT, () => console.log(`Server running at ${PORT}`))
}).catch((err) => console.error("ERROR TO DB CONNECTION"))


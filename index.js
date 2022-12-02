const session = require('express-session')
const express = require("express");
const app = express()

const PORT = 3000;

let indexRouter = require('./routes/contador.js')

const sess = {
    secret: 'ausazko hitz multzoa',
    cookie: {}
}

app.use(session(sess))

app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

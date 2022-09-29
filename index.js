const express = require('express'),
    routes = require('./routes/routes'),
    app = express()

const host = '127.0.0.1'
const port = 3000

app.use(routes)

app.listen(port, host, () => {
    console.log('Application has been started')
})
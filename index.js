const express = require('express')
const { routes } = require('./routes')
const { server } = require('./config')

const app = express()

app.use(routes)

app.listen(server.port, server.host, () => {
    console.log(`Server started on host: ${server.host} and port: ${server.port}`)
})

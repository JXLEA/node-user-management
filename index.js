const express = require('express'),
    routes = require('./routes/routes'),
    app = express()

const host = '127.0.0.1'
const port = 3000

app.use(routes)

app.listen(port, host, () => {
    console.log('Application has been started')
})


/*TODO
    0) fix user functionality
    1) implements tests for user management
    2) implement notes management
    3) cover notes functionality with tests

    optional understand Promises and async/await
 */


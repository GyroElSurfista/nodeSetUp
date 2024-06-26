const express = require("express")
const app = express()
require('dotenv').config()


const port = process.env.NODE_PORT || 3000;

const logginMiddleware = require('./middleware/loggin.middleware')

const healthRoutes = require("./routes/health.routes.js")

app.use(logginMiddleware.log);

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/health', healthRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
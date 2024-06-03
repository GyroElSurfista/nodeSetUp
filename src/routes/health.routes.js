const express = require('express')
const router = express.Router()

const logginMiddleware = require('../middleware/loggin.middleware')
const healthController = require('../controllers/health.controller')


router.get("/", healthController.healthCheck)


module.exports=router;
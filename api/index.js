const express = require('express')
const router = express.Router()

const userRoutes = require('./user.js')
const thoughtRoutes = require('./thought')

router.use('/user', userRoutes)
router.use('/thought', thoughtRoutes)

module.exports = router
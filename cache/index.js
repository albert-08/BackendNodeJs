const express = require('express')

const config = require('../config')
const router = require('./network')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// ROUTES
app.use('/', router)

app.listen(config.cacheService.port, () => {
  console.log(`Cache redis service listening on port ${config.cacheService.port}`)
})
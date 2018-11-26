const express = require('express')
const path = require('path')
const app = express()
const getUsers = require('./apis/users.js')
const getHome = require('./apis/index.js')
// console.log(getUsers)
// const apis = require('./apis')

// app.use('/static', express.static(path.join(__dirname, 'dist/public')))
app.use('/static', express.static(path.join(__dirname, 'dist/static')))
app.engine('html', require('express-art-template'))

app.use('/getusers', getUsers)
app.use('*', getHome)

app.listen(3000, () => console.log('server run localhost:3000'))
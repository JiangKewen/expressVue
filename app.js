const express = require('express')
const path = require('path')
const app = express()
// const apis = require('./apis')

// app.use('/static', express.static(path.join(__dirname, 'dist/public')))
app.use('/static', express.static(path.join(__dirname, 'dist/static')))
app.engine('html', require('express-art-template'))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/getusers', (req, res) => {
  let users = [{name: '赤瞳'}, {name: '尼尔'}, {name: '卡兹克'}, {name: '嘉文四世'}, {name: '伊芙琳'}]
  res.send(JSON.stringify(users))
})

app.get('*', (req, res) => {
  res.render('index.html')
})

app.listen(3000, () => console.log('server run localhost:3000'))
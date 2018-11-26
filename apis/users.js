const express = require('express')
const router = express.Router()

router.get('*', (req, res) => {
  let users = [{ name: '赤瞳' }, { name: '尼尔' }, { name: '卡兹克' }, { name: '嘉文四世' }, { name: '伊芙琳' }]
  res.send(JSON.stringify(users))
  res.end('你好')
})

module.exports = router

// const express = require('express')
// const router = express.Router() //可使用 express.Router 类创建模块化、可挂载的路由句柄

// router.get('*', (req, res) => {
//   res.render('index.html')
// })   // http://localhost:3001/admin/goods
// module.exports = router //暴露这个 router模块

const express = require('express')
const router = express.Router() //可使用 express.Router 类创建模块化、可挂载的路由句柄

router.get('*', (req, res) => {
  res.render('index.html')
})   // http://localhost:3001/admin/goods
module.exports = router //暴露这个 router模块

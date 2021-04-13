const express = require('express')
const router = require('./router')

// 创建 express 应用
const app = express()

// function myLogger(req, res,next) {
//   console.log('myLoggre')
//   next()
// }

// app.use(myLogger)

// 监听 / 路径的 get 请求
// app.get('/', function(req, res) {
//   throw new Error('errorHandler')
// })

// const errorHandler = function (err, req, res, next) {
//   console.log('errorHandler...')
//   res.status(500).json({
//     error: -1,
//     msg: err.toString()
//   })
// }

// app.use(errorHandler)

app.use('/', router)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})
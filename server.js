const express = require('express')
const app = express()
const port = 3000

// 托管静态文件（HTML/CSS/JS）
app.use(express.static('build'))

// API 示例
app.get('/api/test', (req, res) => {
  res.json({ message: 'TEST' })
})
app.get('/api/hello', (req, res) => {
  res.json({ message: 'hello' })
})

// 启动服务器
app.listen(port, '0.0.0.0', () => {
  console.log(`内网访问：http://localhost:${port}`)
})

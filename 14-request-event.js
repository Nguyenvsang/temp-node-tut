// Nhập module http
const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome') //Gửi phản hồi "Welcome" khi có yêu cầu HTTP
// })

// Sử dụng API của EventEmitter 
const server = http.createServer() // Tạo một đối tượng server
// Phát ra sự kiện request 
// Đăng ký nó / Lắng nghe nó / Phản hồi nó 
server.on('request', (req, res) => {
  res.end('Welcome')
})
// Lắng nghe trên cổng 5000 
server.listen(5000)
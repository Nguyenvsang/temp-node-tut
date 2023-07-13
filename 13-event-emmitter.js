// import EventEmitter class từ module events
const EventEmitter = require('events')

// tạo một instance mới của lớp EventEmitter, gọi là customEmitter
const customEmitter = new EventEmitter()

// sử dụng phương thức on để đăng ký hai handler sự kiện cho sự kiện response
// handler đầu tiên nhận hai tham số: tên người dùng và ID người dùng
// handler thứ hai không nhận tham số nào
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

// sử dụng phương thức emit để phát ra sự kiện response
// phương thức emit nhận một hoặc nhiều tham số, các tham số này sẽ được truyền cho các handler sự kiện
customEmitter.emit('response', 'john', 34)

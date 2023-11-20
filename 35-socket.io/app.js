const express = require('express')
const app = express()
const PORT = 8080
const socketIO = require('socket.io')
const http = require('http')
const server = http.createServer(app) // express app으로 http 서버를 생성
const io = socketIO(server) // io를 http 서버로 연결

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('chat')
})
// "connection" socket 관련 통신 처리
let sockets = []
let nicknames = {}
let chats = []
io.on("connection", (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공
  // 클라이언트와 서버는 같은 소켓 객체를 사용함
  console.log("클라이언트 연결 완료", socket.id)
  // sockets.forEach((other) => {
  //   other.emit('new', {client : `${socket.id}`})
  // })
  // io.to(socketId) // 정해진 socket에만 이벤트 실행
  if (chats.length > 0 && sockets.indexOf(socket) === -1) {
    const sendValidChats = chats.filter((chat) => {
      return chat.receive === 'all' || 
             chat.receive === nicknames[socket.id]
    })
    socket.emit('updateChatList', sendValidChats)
  }
  if (sockets.indexOf(socket) === -1) {
    sockets.push(socket)
  }
  socket.on('hello', (data) => {
    console.log(`${data.client} : ${data.msg}`)
    socket.emit('helloKr', {client : `${data.client}`, msg : 'hello!'})
  })
  socket.on('study', (data) => {
    console.log(`${data.client} : ${data.msg}`)
    socket.emit('studyKr', {client : `${data.client}`, msg : 'study!'})
  })
  socket.on('bye', (data) => {
    console.log(`${data.client} : ${data.msg}`)
    socket.emit('byeKr', {client : `${data.client}`, msg : 'bye!'})
  })
  socket.on('setNickname', ({ nickname }) => {
    if (nickname === '') {
      socket.emit('error', {msg : '닉네임은 빈 값이 될 수 없습니다.'})
      return ;
    } else if (Object.values(nicknames).includes(nickname)) {
      socket.emit('error', {msg : '이미 존재하는 닉네임입니다.'})
      return ;
    } else {
      nicknames[socket.id] = nickname
      socket.emit('entrySuccess', { nicknames : Object.values(nicknames) })
      sockets.forEach((other) => {
        other.emit('updateNicknames', { nicknames : Object.values(nicknames) })
      })
      sockets.forEach((other) => {
        other.emit('new', { client : nickname })
      })
    }
  })
  socket.on('send', (chat) => {
    chats.push(chat)
    console.log(chat)
    sockets.forEach((other) => {
      if (chat.receive === 'all') {
        other.emit('newMessage', chat)
      } else {
        if (nicknames[other.id] === chat.receive || nicknames[other.id] === chat.sender) {
          other.emit('newMessage', chat)
        }
      }
    })
  })
  socket.on('disconnect', () => {
    sockets = sockets.filter((remain) => {
      return remain.id !== socket.id
    })
    delete nicknames[socket.id]
    sockets.forEach((other) => {
      other.emit('updateNicknames', { nicknames : Object.values(nicknames) })
    })
    console.log(`${socket.id} 정상 종료 완료`)
  })
})

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`)
})

// () => {
//   chats.forEach((chat) => {
//     if (chat.receive === 'all') {
//       socket.emit('newMessage', {nickname : chat.nickname, msg : chat.msg})
//     } else if (chat.receive === nicknames[socket.id]) {
//       socket.emit('newMessage', {nickname : chat.nickname, msg : chat.msg}) 
//     }
//   })
// }